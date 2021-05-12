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

        public bool UpdateVacancy(Vacancy vacancy);

        public Vacancy GetVacancy(string header);

        public IEnumerable<Vacancy> GetAllVacancies();

        public bool RemoveVacancy(string header);
    }
}
