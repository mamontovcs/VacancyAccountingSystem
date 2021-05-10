using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using VacancyAccountingSystem.Repositories;

namespace VacancyAccountingSystem.Controllers
{
    [ApiController]
    [Route("api/vacancies")]
    public class HomeController : ControllerBase
    {
        private IVacancyRepository _vacancyRepository;

        public HomeController(IVacancyRepository vacancyRepository)
        {
            _vacancyRepository = vacancyRepository;
        }

        [HttpGet, Route("get")]
        [Authorize(Roles = "Manager")]
        public IEnumerable<string> Get()
        {
            _vacancyRepository.AddVacancy(null);

            return new string[] { "C1", "C2" };
        }
    }
}
