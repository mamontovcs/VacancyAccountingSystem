using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using VacancyAccountingSystem.Models;
using VacancyAccountingSystem.Repositories;

namespace VacancyAccountingSystem.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private IRepository<Login> _repository;

        public AuthController(IRepository<Login> repository)
        {
            _repository = repository;
        }

        [HttpPost, Route("login")]
        public IActionResult Login([FromBody] Login login)
        {
            if (login == null)
            {
                return BadRequest("Error!");
            }

            if (CheckIfUserExists(login))
            {
                var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("Vacancy@Accounting@System@Key"));
                var credentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

                var claims = new List<Claim>()
                {
                    new Claim("UserName", login.Email),
                    new Claim("Type", _repository.GetAll().FirstOrDefault(x=>x.Email == login.Email).Type)
                };

                var token = new JwtSecurityToken(
                    "http://localhost:64709",
                    "http://localhost:64709",
                    claims,
                    null,
                    DateTime.Now.AddDays(1),
                    credentials);

                var tokenString = new JwtSecurityTokenHandler().WriteToken(token);

                return Ok(new { Token = tokenString });
            }

            return Unauthorized();
        }

        private bool CheckIfUserExists(Login login)
        {
            return _repository.GetAll().FirstOrDefault(x => x.Email == login.Email && x.Password == login.Password) != null;
        }
    }
}
