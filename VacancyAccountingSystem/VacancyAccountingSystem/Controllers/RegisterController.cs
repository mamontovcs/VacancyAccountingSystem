using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.IO;
using System.Net.Http.Headers;
using VacancyAccountingSystem.Models;

namespace VacancyAccountingSystem.Controllers
{
    [Route("api/register")]
    [ApiController]
    public class RegisterController : ControllerBase
    {
        List<Specialist> _specialists;
        List<Company> _companies;
        // https://stackoverflow.com/questions/1763775/asp-net-mvc-controller-lifecycle
        // About controller (new instance will be constructed for each request)

        public RegisterController()
        {
            _specialists = new List<Specialist>();
        }

        [HttpPost, Route("specialist"), DisableRequestSizeLimit]
        public IActionResult Register([FromBody] Specialist specialist)
        {
            if (specialist == null)
            {
                return BadRequest("Error!");
            }

            _specialists.Add(specialist);

            return Ok();
        }

        [HttpPost, Route("photo")]
        public IActionResult UploadPhoto()
        {
            var file = Request.Form.Files[0];
            var folderName = Path.Combine("Resources", "Images");
            var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);

            if (file.Length > 0)
            {
                var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                var fullPath = Path.Combine(pathToSave, fileName);
                var dbPath = Path.Combine(folderName, fileName);

                using (var stream = new FileStream(fullPath, FileMode.Create))
                {
                    file.CopyTo(stream);
                }
            }

            return Ok();
        }


        [HttpPost, Route("company")]
        public IActionResult Register([FromBody] Company company)
        {
            if (company == null)
            {
                return BadRequest("Error!");
            }

            _companies.Add(company);

            return Ok();
        }
    }
}
