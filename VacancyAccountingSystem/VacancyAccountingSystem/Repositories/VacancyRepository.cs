using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using VacancyAccountingSystem.Data;
using VacancyAccountingSystem.Models;

namespace VacancyAccountingSystem.Repositories
{
    public class VacancyRepository : IVacancyRepository
    {
        // TODO: Add GetAllVacanciesByCompany


        private DatabaseContext _databaseContext;
        public VacancyRepository(DatabaseContext databaseContext)
        {
            _databaseContext = databaseContext;
        }

        public void AddVacancy(Vacancy vacancy)
        {
            _databaseContext.Vacancies.Add(vacancy);
            _databaseContext.SaveChanges();
        }

        public IEnumerable<Vacancy> GetAllVacancies()
        {
            return _databaseContext.Vacancies.Include("Company").ToList();
        }

        public Vacancy GetVacancy(string header)
        {
            return _databaseContext.Vacancies.FirstOrDefault(x => x.Header == header);
        }

        public bool RemoveVacancy(string header)
        {
            var vacancyToRemove = _databaseContext.Vacancies.FirstOrDefault(x => x.Header == header);

            if (vacancyToRemove != null)
            {
                _databaseContext.Vacancies.Remove(vacancyToRemove);
                _databaseContext.SaveChanges();

                return true;
            }

            return false;
        }

        public bool UpdateVacancy(Vacancy vacancy)
        {
            var vacancyToUpdate = _databaseContext.Vacancies.FirstOrDefault(x => x.Id == vacancy.Id);

            if (vacancyToUpdate != null)
            {
                // _databaseContext.Vacancies.Update(vacancyToUpdate); Check this

                _databaseContext.Vacancies.Remove(vacancyToUpdate);
                _databaseContext.Vacancies.Add(vacancyToUpdate);

                _databaseContext.SaveChanges();

                return true;
            }

            return false;
        }
    }
}
