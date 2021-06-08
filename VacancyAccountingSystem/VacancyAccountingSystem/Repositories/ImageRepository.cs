using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VacancyAccountingSystem.Data;
using VacancyAccountingSystem.Models;

namespace VacancyAccountingSystem.Repositories
{
    public class ImageRepository : IRepository<Image>
    {
        private DatabaseContext _databaseContext;
        public ImageRepository(DatabaseContext databaseContext)
        {
            _databaseContext = databaseContext;
        }

        public void Add(Image entity)
        {
            _databaseContext.Add(entity);
            _databaseContext.SaveChanges();
        }

        public Image Get(int id)
        {
            return _databaseContext.Images.FirstOrDefault(x => x.Id == id);
        }

        public IEnumerable<Image> GetAll()
        {
            return _databaseContext.Images.ToList();
        }

        public bool Remove(int id)
        {
            throw new NotImplementedException();
        }

        public bool Update(Image entity)
        {
            throw new NotImplementedException();
        }
    }
}
