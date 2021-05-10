using Microsoft.AspNetCore.Http;

namespace VacancyAccountingSystem.Models
{
    public class Specialist
    {
        public string PhotoPath { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string DesiredSalary { get; set; }
        public string YearsOfExperience { get; set; }
        public string Address { get; set; }
        public string Technologies { get; set; }
        public string EnglishLevel { get; set; }
        public string EmploymentOptions { get; set; }
        public string PhoneNumber { get; set; }
        public string Skype { get; set; }
        public string Position { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
    }
}
