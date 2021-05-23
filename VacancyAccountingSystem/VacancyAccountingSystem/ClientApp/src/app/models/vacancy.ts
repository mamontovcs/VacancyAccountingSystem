export class Vacancy {
  constructor(about: string, header: string, requirements: string, offers: string, companyName: string) {

    this.header = header;
    this.requirements = requirements;
    this.offers = offers;
    this.companyName = companyName;
    this.about = about;
  }

  id: number;
  about: string;
  header: string;
  requirements: string;
  offers: string;
  companyName: string;
}
