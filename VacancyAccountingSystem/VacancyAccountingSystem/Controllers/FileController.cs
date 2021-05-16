using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace VacancyAccountingSystem.Controllers
{
    [Route("api/file")]
    [ApiController]
    public class FileController : Controller
    {
        [HttpPost, Route("photo"), DisableRequestSizeLimit]
        public IActionResult PostPhoto()
        {
            var file = Request.Form.Files[0];
            var folderName = Path.Combine("Resources", "Images");
            var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);

            if (file.Length > 0)
            {
                var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                var fullPath = Path.Combine(pathToSave, fileName);

                using (var stream = new FileStream(fullPath, FileMode.Create))
                {
                    file.CopyTo(stream);
                }
            }

            return Ok();
        }

        [HttpGet("photo/{photoPath}"), DisableRequestSizeLimit]
        public IActionResult GetPhoto(string photoPath)
        {
            var folderName = Path.Combine("Resources", "Images");
            var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);

            var fullPath = Path.Combine(pathToSave, photoPath);

            return PhysicalFile(fullPath, "application/octet-stream", photoPath);
        }
    }
}
