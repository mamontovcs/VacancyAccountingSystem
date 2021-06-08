using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using VacancyAccountingSystem.Data;
using VacancyAccountingSystem.Models;

namespace VacancyAccountingSystem.Repositories
{
    public class VacancyRepository : IRepository<Vacancy>
    {
        // TODO: Add GetAllVacanciesByCompany
        private DatabaseContext _databaseContext;
        public VacancyRepository(DatabaseContext databaseContext)
        {
            _databaseContext = databaseContext;
        }

        public void Add(Vacancy vacancy)
        {
            vacancy.CompanyFK = vacancy.Company.Id;
            vacancy.Company = null; // workaround

            _databaseContext.Vacancies.Add(vacancy);

            _databaseContext.SaveChanges();
        }

        public IEnumerable<Vacancy> GetAll()
        {
            return _databaseContext.Vacancies.Include(x => x.Company).ToList();
        }

        public Vacancy Get(int id)
        {
            return _databaseContext.Vacancies.FirstOrDefault(x => x.Id == id);
        }

        public bool Remove(int id)
        {
            var vacancyToRemove = _databaseContext.Vacancies.FirstOrDefault(x => x.Id == id);

            if (vacancyToRemove != null)
            {
                _databaseContext.Vacancies.Remove(vacancyToRemove);
                _databaseContext.SaveChanges();

                return true;
            }

            return false;
        }

        public bool Update(Vacancy vacancy)
        {
            var vacancyToUpdate = _databaseContext.Vacancies.FirstOrDefault(x => x.Id == vacancy.Id);

            if (vacancyToUpdate != null)
            {
                // _databaseContext.Vacancies.Update(vacancyToUpdate); Check this

                _databaseContext.Vacancies.Remove(vacancyToUpdate);
                _databaseContext.Vacancies.Add(vacancy);

                _databaseContext.SaveChanges();

                return true;
            }

            return false;
        }
    }
}
