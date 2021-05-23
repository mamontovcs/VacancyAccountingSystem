import {Login} from './login';

export class Company {
    constructor(Login: Login, Name: string, PhotoPath: string, Website: string, AboutCompany: string) {
      this.login = Login;
      this.photoPath = PhotoPath;
      this.name = Name;
      this.website = Website;
      this.aboutCompany = AboutCompany;
    }
    id: number;
    name: string;
    aboutCompany: string;
    website: string;
    photoPath: string;
    login: Login;
  }
