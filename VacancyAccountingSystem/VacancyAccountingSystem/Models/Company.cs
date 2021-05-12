using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace VacancyAccountingSystem.Models
{
    public class Company
    {
        public Company()
        {
            OpenedVacancies = new List<Vacancy>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public string PhotoPath { get; set; }

        public string Name { get; set; }

        public string Email { get; set; }
        public string Password { get; set; }

        public ICollection<Vacancy> OpenedVacancies { get; set; }

        public string AboutCompany { get; set; }

        public string Website { get; set; }
    }
}
