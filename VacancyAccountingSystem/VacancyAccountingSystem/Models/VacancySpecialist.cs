namespace VacancyAccountingSystem.Models
{
    public class VacancySpecialist
    {
        public int VacancyId { get; set; }
        public Vacancy Vacancy { get; set; }

        public int SpecialistId { get; set; }
        public Specialist Specialist { get; set; }
    }
}
