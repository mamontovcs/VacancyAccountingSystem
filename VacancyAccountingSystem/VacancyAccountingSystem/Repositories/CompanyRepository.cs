using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VacancyAccountingSystem.Data;
using VacancyAccountingSystem.Models;

namespace VacancyAccountingSystem.Repositories
{
    public class CompanyRepository : IRepository<Company>
    {
        private DatabaseContext _databaseContext;
        public CompanyRepository(DatabaseContext databaseContext)
        {
            _databaseContext = databaseContext;
        }

        public void Add(Company entity)
        {
            _databaseContext.Add(entity);
            _databaseContext.SaveChanges();
        }

        public Company Get(int id)
        {
            return _databaseContext.Companies.FirstOrDefault(x => x.Id == id);
        }

        public IEnumerable<Company> GetAll()
        {
            return _databaseContext.Companies.Include(x => x.Login).ToList();
        }

        public bool Remove(int id)
        {
            _databaseContext.Companies.Remove(_databaseContext.Companies.FirstOrDefault(x => x.Id == id));
            _databaseContext.SaveChanges();

            return true;
        }

        public bool Update(Company entity)
        {
            var companyToUpdate = _databaseContext.Companies.FirstOrDefault(x => x.Id == entity.Id);

            if (companyToUpdate != null)
            {
                _databaseContext.Companies.Remove(companyToUpdate);
                _databaseContext.Companies.Add(entity);

                _databaseContext.SaveChanges();

                return true;
            }

            return false;
        }
    }
}
