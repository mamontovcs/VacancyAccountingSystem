using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace VacancyAccountingSystem.Models
{
    public class Company : User
    {
        public Company()
        {
            OpenedVacancies = new List<Vacancy>();
        }

        public string Name { get; set; }

        public ICollection<Vacancy> OpenedVacancies { get; set; }

        public string AboutCompany { get; set; }

        public string Website { get; set; }
    }
}
