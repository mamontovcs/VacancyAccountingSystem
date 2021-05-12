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

        public DbSet<Company> Companies { get; set; }

        public DbSet<Specialist> Specialists { get; set; }

    }
}
