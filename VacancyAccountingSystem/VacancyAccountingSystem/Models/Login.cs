using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace VacancyAccountingSystem.Models
{
    public class Login
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }

        public string Type { get; set; }

        [ForeignKey("UserFK")]
        public User User { get; set; }

        public int? UserFK { get; set; }
    }
}
