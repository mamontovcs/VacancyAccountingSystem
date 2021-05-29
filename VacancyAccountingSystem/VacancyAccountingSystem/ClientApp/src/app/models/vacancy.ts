export class Vacancy {
  constructor(about: string, header: string, requirements: string, offers: string, salary: number, companyName: string) {

    this.header = header;
    this.requirements = requirements;
    this.offers = offers;
    this.companyName = companyName;
    this.about = about;
    this.salary = salary;
  }

  id: number;
  about: string;
  header: string;
  requirements: string;
  offers: string;
  companyName: string;
  salary: number;
}
