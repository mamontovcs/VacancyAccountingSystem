using System.Collections.Generic;

namespace VacancyAccountingSystem.Models
{
    public class Company
    {
        public Company()
        {
            OpenedVacancies = new List<Vacancy>();
        }

        public string PhotoPath { get; set; }

        public string Name { get; set; }

        public List<Vacancy> OpenedVacancies { get; set; }

        public string AboutCompany { get; set; }

        public string Website { get; set; }
    }
}
