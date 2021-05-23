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
            RespondedSpecialists = new List<Specialist>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public string Header { get; set; }

        public string Requirements { get; set; }

        public string Offers { get; set; }

        public string About { get; set; }

        [ForeignKey("CompanyFK")]
        public virtual Company Company { get; set; }

        public int? CompanyFK { get; set; }

        public ICollection<Specialist> RespondedSpecialists { get; set; }

    }
}
