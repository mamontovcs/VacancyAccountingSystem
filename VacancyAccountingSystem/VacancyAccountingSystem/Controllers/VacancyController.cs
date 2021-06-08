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
        private IRepository<Vacancy> _vacancyRepository;

        public VacancyController(IRepository<Vacancy> vacancyRepository)
        {
            _vacancyRepository = vacancyRepository;
        }

        [HttpGet, Route("getall")]
        //[Authorize(Roles = "Manager")]
        public IEnumerable<Vacancy> GetAllVacancies()
        {
            return _vacancyRepository.GetAll();
        }

        [HttpGet, Route("getByKeyWord/{keyWord}")]
        public IEnumerable<Vacancy> GetByKeyWord(string keyWord)
        {
            return _vacancyRepository.GetAll().Where(x=>x.Header.ToLower().Contains(keyWord.ToLower()));
        }


        [HttpPost, Route("add")]
        //[Authorize(Roles = "Manager")]
        public IActionResult AddVacancy(Vacancy vacancy)
        {
            _vacancyRepository.Add(vacancy);
            return Ok();
        }
    }
}
