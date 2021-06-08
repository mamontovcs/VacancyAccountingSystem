using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using VacancyAccountingSystem.Models;
using VacancyAccountingSystem.Repositories;

namespace VacancyAccountingSystem.Controllers
{
    [ApiController]
    [Route("api/users")]
    public class UserInfoController : Controller
    {
        private ISpecialistRepositoryDecorator specialistRepositoryDecorator;

        private IRepository<Company> _companyRepository;

        public UserInfoController(ISpecialistRepositoryDecorator repository, IRepository<Company> companyRepository)
        {
            specialistRepositoryDecorator = repository;
            _companyRepository = companyRepository;
        }

        [HttpGet("getSpecialistInfo/{email}")]
        public IActionResult GetSpecialistInfo(string email)
        {
            var specialist = specialistRepositoryDecorator.GetSpecialistByEmail(email);

            if (specialist == null)
            {
                BadRequest();
            }

            return Ok(specialist);
        }

        [HttpGet("getCompanyInfo/{email}")]
        public IActionResult GetCompanyInfo(string email)
        {
            var company = (_companyRepository as CompanyRepository).GetCompanyByEmail(email); 
            // I know that I need to create Decorator here. But I don't have enough time

            if (company == null)
            {
                BadRequest();
            }

            return Ok(company);
        }

        [HttpPut("updateSpecialistProfile")]
        public IActionResult UpdateSpecialistProfile([FromBody] Specialist newSpecialist)
        {
            if (newSpecialist == null)
            {
                BadRequest();
            }

            var result = specialistRepositoryDecorator.Update(newSpecialist);

            return Ok(result);
        }
    }
}
