using Microsoft.AspNetCore.Mvc;
using System.IO;
using System.Linq;
using VacancyAccountingSystem.Models;
using VacancyAccountingSystem.Repositories;

namespace VacancyAccountingSystem.Controllers
{
    [Route("api/file")]
    [ApiController]
    public class FileController : Controller
    {
        private IRepository<Image> _repository;

        public FileController(IRepository<Image> repository)
        {
            _repository = repository;
        }

        [HttpPost, Route("photo"), DisableRequestSizeLimit]
        public IActionResult PostPhoto()
        {
            var file = Request.Form.Files[0];
            //var folderName = Path.Combine("Resources", "Images");
            //var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);

            //if (file.Length > 0)
            //{
            //    var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
            //    var fullPath = Path.Combine(pathToSave, fileName);

            //    using (var stream = new FileStream(fullPath, FileMode.Create))
            //    {
            //        file.CopyTo(stream);
            //    }
            //}

            Image img = new Image();
            img.ImageTitle = file.FileName;

            MemoryStream ms = new MemoryStream();
            file.CopyTo(ms);
            img.ImageData = ms.ToArray();

            ms.Close();
            ms.Dispose();

            _repository.Add(img);

            return Ok();
        }

        [HttpGet("photo/{photoPath}"), DisableRequestSizeLimit]
        public IActionResult GetPhoto(string photoPath)
        {
            var image = _repository.GetAll().FirstOrDefault(x => x.ImageTitle == photoPath && x.ImageData != null);

            var folderName = Path.Combine("Resources", "Images");
            var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);

            var fullPath = Path.Combine(pathToSave, photoPath);

            return File(image.ImageData, "image/jpeg");
        }
    }
}
