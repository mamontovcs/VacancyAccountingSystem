using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using VacancyAccountingSystem.Data;
using VacancyAccountingSystem.Models;

namespace VacancyAccountingSystem.Repositories
{
    public class SpecialistRepository : IRepository<Specialist>
    {
        private DatabaseContext _databaseContext;
        public SpecialistRepository(DatabaseContext databaseContext)
        {
            _databaseContext = databaseContext;
        }

        public void Add(Specialist entity)
        {
            // TODO: Need to investigate how to do it in normal way ....
            _databaseContext.Logins.Add(entity.Login);
            _databaseContext.SaveChanges();

            var loginId = _databaseContext.Logins.FirstOrDefault(x => x.Email == entity.Login.Email).Id;

            entity.LoginFK = loginId;
            _databaseContext.Specialists.Add(entity);
            _databaseContext.SaveChanges();
        }

        public Specialist Get(int id)
        {
            return _databaseContext.Specialists.FirstOrDefault(x => x.Id == id);
        }

        public IEnumerable<Specialist> GetAll()
        {
            return _databaseContext.Specialists.Include(x => x.Login).Include(x => x.Image).ToList();
        }

        public bool Remove(int id)
        {
            _databaseContext.Specialists.Remove(_databaseContext.Specialists.FirstOrDefault(x => x.Id == id));
            _databaseContext.SaveChanges();

            return true;
        }

        public bool Update(Specialist entity)
        {
            var toDelete = _databaseContext.Specialists.FirstOrDefault(x => x.Id == entity.Id);

            if (toDelete != null)
            {
                _databaseContext.Specialists.Remove(toDelete);
                _databaseContext.SaveChanges();

                // Code duplication. Need to find better way to do it...
                _databaseContext.Logins.Remove(_databaseContext.Logins.FirstOrDefault(x => x.Id == toDelete.Id));
                _databaseContext.SaveChanges();

                _databaseContext.Logins.Add(entity.Login);
                _databaseContext.SaveChanges();

                var loginId = _databaseContext.Logins.FirstOrDefault(x => x.Email == entity.Login.Email).Id;

                entity.LoginFK = loginId;
                _databaseContext.Specialists.Add(entity);
                _databaseContext.SaveChanges();

                return true;
            }

            return false;
        }
    }
}
