using Microsoft.EntityFrameworkCore;
using VacancyAccountingSystem.Models;

namespace VacancyAccountingSystem.Data
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options)
        : base(options)
        {

        }
        public DbSet<Vacancy> Vacancies { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            // optionsBuilder.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=VacancyAccountingSystem;Trusted_Connection=True;");
        }
    }
}
