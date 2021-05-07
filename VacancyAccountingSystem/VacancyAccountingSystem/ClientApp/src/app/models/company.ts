export class Company {
    constructor(Email: string, Password: string, Name: string, PhotoPath: string, Website: string, AboutCompany: string) {
      this.Email = Email;
      this.Password = Password;
      this.PhotoPath = PhotoPath;
      this.Name = Name;
      this.Website = Website;
      this.AboutCompany = AboutCompany;
    }
    Name: string;
    AboutCompany: string;
    Email: string;
    Password: string;
    Website: string;
    PhotoPath: string;
  }
