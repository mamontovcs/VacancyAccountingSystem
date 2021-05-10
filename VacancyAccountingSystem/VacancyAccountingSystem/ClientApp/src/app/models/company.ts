export class Company {
    constructor(Email: string, Password: string, Name: string, PhotoPath: string, Website: string, AboutCompany: string) {
      this.email = Email;
      this.password = Password;
      this.photoPath = PhotoPath;
      this.name = Name;
      this.website = Website;
      this.aboutCompany = AboutCompany;
    }
    name: string;
    aboutCompany: string;
    email: string;
    password: string;
    website: string;
    photoPath: string;
  }
