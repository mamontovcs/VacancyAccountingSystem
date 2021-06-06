import {Login} from './login';
import {Image} from './image';

export class Company {
  constructor(Login: Login, Name: string, Image: Image, Website: string, AboutCompany: string) {
    this.login = Login;
    this.image = Image;
    this.name = Name;
    this.website = Website;
    this.aboutCompany = AboutCompany;
  }

  id: number;
  name: string;
  aboutCompany: string;
  website: string;
  image: Image;
  login: Login;
}
