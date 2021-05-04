using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VacancyAccountingSystem.Models;

namespace VacancyAccountingSystem.Repositories
{
    public interface IVacancyRepository
    {
        public void AddVacancy(Vacancy vacancy);

        public void UpdateVacancy();

        public void GetVacancy(string name);

        public IEnumerable<Vacancy> GetAllVacancies();

        public void RemoveVacancy(string name);
    }
}
