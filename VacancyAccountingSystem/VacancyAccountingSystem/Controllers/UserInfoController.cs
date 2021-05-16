using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VacancyAccountingSystem.Models;
using VacancyAccountingSystem.Repositories;

namespace VacancyAccountingSystem.Controllers
{
    [ApiController]
    [Route("api/users")]
    public class UserInfoController : Controller
    {
        private ISpecialistRepositoryDecorator _repository;

        public UserInfoController(ISpecialistRepositoryDecorator repository)
        {
            _repository = repository;
        }

        [HttpGet("getSpecialistInfo/{email}")]
        public IActionResult GetSpecialistInfo(string email)
        {
            var specialist = _repository.GetSpecialistByEmail(email);

            if (specialist == null)
            {
                BadRequest();
            }

            return Ok(specialist);
        }
    }
}
