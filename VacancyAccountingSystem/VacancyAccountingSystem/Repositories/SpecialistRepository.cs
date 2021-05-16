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
            _databaseContext.Add(entity);
            _databaseContext.SaveChanges();
        }

        public Specialist Get(int id)
        {
            return _databaseContext.Specialists.FirstOrDefault(x => x.Id == id);
        }

        public IEnumerable<Specialist> GetAll()
        {
            return _databaseContext.Specialists.Include(x => x.Login).ToList();
        }

        public bool Remove(int id)
        {
            _databaseContext.Specialists.Remove(_databaseContext.Specialists.FirstOrDefault(x => x.Id == id));
            _databaseContext.SaveChanges();

            return true;
        }

        public bool Update(Specialist entity)
        {
            var specToUpdate = _databaseContext.Specialists.FirstOrDefault(x => x.Id == entity.Id);

            if (specToUpdate != null)
            {
                _databaseContext.Specialists.Remove(specToUpdate);
                _databaseContext.Specialists.Add(entity);

                _databaseContext.SaveChanges();

                return true;
            }

            return false;
        }
    }
}
