import {Company} from './company';

export class Vacancy {
  constructor(about: string, header: string, requirements: string, offers: string, salary: number, company: Company) {

    this.header = header;
    this.requirements = requirements;
    this.offers = offers;
    this.company = company;
    this.about = about;
    this.salary = salary;
  }

  id: number;
  about: string;
  header: string;
  requirements: string;
  offers: string;
  company: Company;
  salary: number;
}
