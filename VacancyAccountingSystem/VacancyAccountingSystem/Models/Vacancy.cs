using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace VacancyAccountingSystem.Models
{
    public class Vacancy
    {
        public Vacancy()
        {
            VacancySpecialists = new List<VacancySpecialist>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public string Header { get; set; }

        public string Requirements { get; set; }

        public double? Salary { get; set; }

        public string Offers { get; set; }

        public string About { get; set; }

        [ForeignKey("CompanyFK")]
        public Company Company { get; set; }

        public int? CompanyFK { get; set; }

        public ICollection<VacancySpecialist> VacancySpecialists { get; set; }

    }
}
