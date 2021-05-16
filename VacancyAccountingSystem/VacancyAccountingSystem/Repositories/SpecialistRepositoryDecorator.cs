using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VacancyAccountingSystem.Models;

namespace VacancyAccountingSystem.Repositories
{
    public class SpecialistRepositoryDecorator : ISpecialistRepositoryDecorator
    {
        private IRepository<Specialist> _repository;

        public SpecialistRepositoryDecorator(IRepository<Specialist> repository)
        {
            _repository = repository;
        }

        public void Add(Specialist entity)
        {
            _repository.Add(entity);
        }

        public Specialist Get(int id)
        {
            return _repository.Get(id);
        }

        public IEnumerable<Specialist> GetAll()
        {
            return _repository.GetAll();
        }

        public Specialist GetSpecialistByEmail(string email)
        {
            return _repository.GetAll().FirstOrDefault(x => x.Login.Email == email);
        }

        public bool Remove(int id)
        {
            return _repository.Remove(id);
        }

        public bool Update(Specialist entity)
        {
            return _repository.Update(entity);
        }
    }
}
