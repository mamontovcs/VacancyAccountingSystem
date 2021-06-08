using Microsoft.EntityFrameworkCore;
using VacancyAccountingSystem.Models;

namespace VacancyAccountingSystem.Data
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options)
        : base(options)
        {
            // Database.EnsureDeleted();
            Database.EnsureCreated();
        }

        public DbSet<Vacancy> Vacancies { get; set; }

        public DbSet<Company> Companies { get; set; }

        public DbSet<Specialist> Specialists { get; set; }

        public DbSet<Login> Logins { get; set; }

        public DbSet<VacancySpecialist> VacancySpecialists { get; set; }

        public DbSet<Image> Images { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
                .HasOne(a => a.Login)
                .WithOne(b => b.User)
                .HasForeignKey<User>(b => b.Id)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<User>().Property(x => x.LoginFK)
                .IsRequired();

            modelBuilder.Entity<VacancySpecialist>().HasKey(sc => new { sc.VacancyId, sc.SpecialistId });

            modelBuilder.Entity<VacancySpecialist>()
                .HasOne<Vacancy>(sc => sc.Vacancy)
                .WithMany(s => s.VacancySpecialists)
                .HasForeignKey(sc => sc.VacancyId);

            modelBuilder.Entity<VacancySpecialist>()
                 .HasOne<Specialist>(sc => sc.Specialist)
                 .WithMany(s => s.VacancySpecialists)
                 .HasForeignKey(sc => sc.SpecialistId);

            modelBuilder.Entity<Specialist>().ToTable(nameof(Specialist));
            modelBuilder.Entity<Company>().ToTable(nameof(Company));
        }
    }
}
