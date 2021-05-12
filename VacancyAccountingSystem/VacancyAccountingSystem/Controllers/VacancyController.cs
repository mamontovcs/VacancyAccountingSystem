using Microsoft.AspNetCore.Http;
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
    [Route("api/vacancies")]
    public class VacancyController : Controller
    {
        private IVacancyRepository _vacancyRepository;

        public VacancyController(IVacancyRepository vacancyRepository)
        {
            _vacancyRepository = vacancyRepository;
        }

        [HttpGet, Route("getall")]
        //[Authorize(Roles = "Manager")]
        public IEnumerable<Vacancy> GetAllVacancies()
        {
            return _vacancyRepository.GetAllVacancies();
        }


        [HttpPost, Route("add")]
        //[Authorize(Roles = "Manager")]
        public IActionResult AddVacancy(Vacancy vacancy)
        {
            _vacancyRepository.AddVacancy(vacancy);
            return Ok();
        }
    }
}
