using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace VacancyAccountingSystem.Repositories
{
    public interface IRepository<T>
    {
        void Add(T entity);

        bool Update(T entity);

        T Get(int id);

        IEnumerable<T> GetAll();

        bool Remove(int id);
    }
}
