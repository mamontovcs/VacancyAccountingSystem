using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VacancyAccountingSystem.Models;

namespace VacancyAccountingSystem.Controllers
{
    [ApiController]
    [Route("api/users")]
    public class UserController : Controller
    {
        [HttpGet("getSpecialistInfo/{userName}")]
        public IActionResult GetSpecialistInfo(string userName)
        {
             return Ok(new Specialist() 
            { 
                Name = "Vitaliy",
                Address = "D31",
                DesiredSalary = "5000",
                Email = "vintixfish@gmail.com",
                EmploymentOptions = "Full time",
                EnglishLevel = "B2",
                Password = "20000",
                PhoneNumber = "0670119497",
                PhotoPath = "x",
                Position = ".Net developer",
                Skype = "Gomer1245",
                Surname = "Mamontov",
                Technologies = ".Net",
                YearsOfExperience = "3"
            });
        }
    }
}
