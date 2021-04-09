﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using VacancyAccountingSystem.Models;

namespace VacancyAccountingSystem.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        [HttpPost, Route("login")]
        public IActionResult Login([FromBody] Login login)
        {
            if (login == null)
            {
                return BadRequest("Error!");
            }

            if (login.UserName == "a" && login.Password == "b")
            {
                var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("Vacancy@Accounting@System@Key"));
                var credentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

                var token = new JwtSecurityToken("http://localhost:64709", "http://localhost:64709",
                    new List<Claim>(), null, DateTime.Now.AddMinutes(5), credentials);

                var tokenString = new JwtSecurityTokenHandler().WriteToken(token);
                return Ok(new { Token = tokenString });

            }

            return Unauthorized();
        }
    }
}
