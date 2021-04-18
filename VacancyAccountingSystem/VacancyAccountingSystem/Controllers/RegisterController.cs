using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using VacancyAccountingSystem.Models;

namespace VacancyAccountingSystem.Controllers
{
    [Route("api/register")]
    [ApiController]
    public class RegisterController : ControllerBase
    {
        List<Specialist> _specialists;
        // https://stackoverflow.com/questions/1763775/asp-net-mvc-controller-lifecycle
        // About controller (new instance will be constructed for each request)

        public RegisterController()
        {
            _specialists = new List<Specialist>();
        }

        [HttpPost, Route("reg")]
        public IActionResult Register([FromBody] Specialist specialist)
        {
            if (specialist == null)
            {
                return BadRequest("Error!");
            }

            _specialists.Add(specialist);

            return Ok();
        }
    }
}
