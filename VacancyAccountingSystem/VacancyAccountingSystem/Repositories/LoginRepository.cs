using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VacancyAccountingSystem.Data;
using VacancyAccountingSystem.Models;

namespace VacancyAccountingSystem.Repositories
{
    public class LoginRepository : IRepository<Login>
    {
        private DatabaseContext _databaseContext;
        public LoginRepository(DatabaseContext databaseContext)
        {
            _databaseContext = databaseContext;
        }

        public void Add(Login entity)
        {
            _databaseContext.Add(entity);
            _databaseContext.SaveChanges();
        }

        public Login Get(int id)
        {
            return _databaseContext.Logins.FirstOrDefault(x => x.Id == id);
        }

        public IEnumerable<Login> GetAll()
        {
            return _databaseContext.Logins.ToList();
        }

        public bool Remove(int id)
        {
            _databaseContext.Logins.Remove(_databaseContext.Logins.FirstOrDefault(x => x.Id == id));
            _databaseContext.SaveChanges();

            return true;
        }

        public bool Update(Login entity)
        {
            var loginToUpdate = _databaseContext.Logins.FirstOrDefault(x => x.Id == entity.Id);

            if (loginToUpdate != null)
            {
                _databaseContext.Logins.Remove(loginToUpdate);
                _databaseContext.Logins.Add(entity);

                _databaseContext.SaveChanges();

                return true;
            }

            return false;
        }
    }
}
