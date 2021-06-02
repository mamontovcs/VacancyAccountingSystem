// @ts-ignore
import {Login} from './login';

export class Specialist {
  constructor(Login: Login, DesiredSalary: number, YearsOfExperience: number,
              Address: string, Technologies: string, EnglishLevel: string,
              EmploymentOptions: string, PhoneNumber: string, Skype: string, PhotoPath: string,
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
    this.photoPath = PhotoPath;
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
  photoPath: string;
  position: string;
  guid: string;
}
