// @ts-ignore
export class Specialist {
  constructor(Email: string, Password: string, DesiredSalary: number, YearsOfExperience: number,
              Address: string, Technologies: string, EnglishLevel: string,
              EmploymentOptions: string, PhoneNumber: string, Skype: string, PhotoPath: string,
              Name: string, Surname: string, Position: string) {
    this.email = Email;
    this.password = Password;
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
  }

  name: string;
  surname: string;
  email: string;
  password: string;
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
}
