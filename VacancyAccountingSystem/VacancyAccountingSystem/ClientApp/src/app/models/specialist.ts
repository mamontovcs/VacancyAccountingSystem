// @ts-ignore
import {Login} from './login';
import {Image} from './image';

export class Specialist {
  // tslint:disable-next-line:no-shadowed-variable
  constructor(Login: Login, DesiredSalary: number, YearsOfExperience: number,
              Address: string, Technologies: string, EnglishLevel: string,
              EmploymentOptions: string, PhoneNumber: string, Skype: string, Image: Image,
              Name: string, Surname: string, Position: string, id?: number) {
    this.id = id;
    this.login = Login;
    this.desiredSalary = DesiredSalary;
    this.yearsOfExperience = YearsOfExperience;
    this.address = Address;
    this.technologies = Technologies;
    this.englishLevel = EnglishLevel;
    this.employmentOptions = EmploymentOptions;
    this.phoneNumber = PhoneNumber;
    this.skype = Skype;
    this.image = Image;
    this.name = Name;
    this.surname = Surname;
    this.position = Position;

    console.log(this.id);
  }

  id: number;
  name: string;
  surname: string;
  login: Login;
  desiredSalary: number;
  yearsOfExperience: number;
  address: string;
  technologies: string;
  englishLevel: string;
  employmentOptions: string;
  phoneNumber: string;
  skype: string;
  image: Image;
  position: string;
  guid: string;
}
