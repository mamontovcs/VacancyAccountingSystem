using Microsoft.AspNetCore.Http;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace VacancyAccountingSystem.Models
{
    public class Specialist : User
    {
        public Specialist()
        {
            RespondedVacancies = new List<Vacancy>();
        }

        public double DesiredSalary { get; set; }
        public int YearsOfExperience { get; set; }
        public string Address { get; set; }
        public string Technologies { get; set; }
        public string EnglishLevel { get; set; }
        public string EmploymentOptions { get; set; }
        public string PhoneNumber { get; set; }
        public string Skype { get; set; }
        public string Position { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }  
        public ICollection<Vacancy> RespondedVacancies { get; set; }
    }
}
