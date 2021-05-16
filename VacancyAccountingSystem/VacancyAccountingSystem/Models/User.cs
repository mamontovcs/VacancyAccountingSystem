using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace VacancyAccountingSystem.Models
{
    public abstract class User
    {
        public User()
        {
            Login = new Login();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [ForeignKey("LoginFK")]
        public virtual Login Login { get; set; }

        public int? LoginFK { get; set; }
        public string PhotoPath { get; set; }
    }
}
