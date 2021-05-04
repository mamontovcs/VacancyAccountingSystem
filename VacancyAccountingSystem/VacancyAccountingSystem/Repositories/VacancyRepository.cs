using System;
using System.Collections.Generic;
using VacancyAccountingSystem.Data;
using VacancyAccountingSystem.Models;

namespace VacancyAccountingSystem.Repositories
{
    public class VacancyRepository : IVacancyRepository
    {
        private DatabaseContext _databaseContext;
        public VacancyRepository(DatabaseContext databaseContext)
        {
            _databaseContext = databaseContext;
        }

        public void AddVacancy(Vacancy vacancy)
        {
          //  _databaseContext.Vacancies.Add(new Vacancy() { AboutCompany = "blablabla", Header = "Bla", Offers = "Nothing", Requirements = "Alot" });
            _databaseContext.SaveChanges();
        }

        public IEnumerable<Vacancy> GetAllVacancies()
        {
            throw new NotImplementedException();
        }

        public void GetVacancy(string name)
        {
            throw new NotImplementedException();
        }

        public void RemoveVacancy(string name)
        {
            throw new NotImplementedException();
        }

        public void UpdateVacancy()
        {
            throw new NotImplementedException();
        }
    }
}
