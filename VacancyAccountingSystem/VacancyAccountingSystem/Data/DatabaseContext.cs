using Microsoft.EntityFrameworkCore;
using VacancyAccountingSystem.Models;

namespace VacancyAccountingSystem.Data
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options)
        : base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<Vacancy> Vacancies { get; set; }

        public DbSet<Company> Companies { get; set; }

        public DbSet<Specialist> Specialists { get; set; }

        public DbSet<Login> Logins { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
                .HasOne(a => a.Login)
                .WithOne(b => b.User)
                .HasForeignKey<Login>(b => b.Id);
        }
    }
}
