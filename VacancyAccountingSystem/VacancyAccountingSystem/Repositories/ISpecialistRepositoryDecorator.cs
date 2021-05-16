using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VacancyAccountingSystem.Models;

namespace VacancyAccountingSystem.Repositories
{
    public interface ISpecialistRepositoryDecorator: IRepository<Specialist>
    {
        Specialist GetSpecialistByEmail(string email);
    }
}
