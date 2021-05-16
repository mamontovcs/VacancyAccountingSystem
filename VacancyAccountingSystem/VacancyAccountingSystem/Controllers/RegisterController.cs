using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.IO;
using System.Net.Http.Headers;
using VacancyAccountingSystem.Models;
using VacancyAccountingSystem.Repositories;

namespace VacancyAccountingSystem.Controllers
{
    [Route("api/register")]
    [ApiController]
    public class RegisterController : ControllerBase
    {
        private readonly IRepository<Company> _companyRepository;
        private readonly IRepository<Specialist> _specialistRepository;
        private readonly IRepository<Login> _loginRepository;

        public RegisterController(IRepository<Company> companyRepository,
            IRepository<Specialist> specialistRepository,
            IRepository<Login> loginRepository)
        {
            _companyRepository = companyRepository;
            _specialistRepository = specialistRepository;
            _loginRepository = loginRepository;
        }

        [HttpPost, Route("specialist")]
        public IActionResult Register([FromBody] Specialist specialist)
        {
            if (specialist == null)
            {
                return BadRequest("Error!");
            }

            _specialistRepository.Add(specialist);

            return Ok();
        }

        [HttpPost, Route("company")]
        public IActionResult Register([FromBody] Company company)
        {
            if (company == null)
            {
                return BadRequest("Error!");
            }

            _companyRepository.Add(company);

            return Ok();
        }
    }
}
