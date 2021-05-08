export class Specialist {
  constructor(Email: string, Password: string, DesiredSalary: number, YearsOfExperience: number,
              Address: string, Technologies: string, EnglishLevel: string,
              EmploymentOptions: string, PhoneNumber: string, Skype: string, PhotoPath: string,
              Name: string, Surname: string, Position: string) {
    this.Email = Email;
    this.Password = Password;
    this.DesiredSalary = DesiredSalary;
    this.YearsOfExperience = YearsOfExperience;
    this.Address = Address;
    this.Technologies = Technologies;
    this.EnglishLevel = EnglishLevel;
    this.EmploymentOptions = EmploymentOptions;
    this.PhoneNumber = PhoneNumber;
    this.Skype = Skype;
    this.PhotoPath = PhotoPath;
    this.Name = Name;
    this.Surname = Surname;
    this.Position = Position;
  }
  Name: string;
  Surname: string;
  Email: string;
  Password: string;
  DesiredSalary: number;
  YearsOfExperience: number;
  Address: string;
  Technologies: string;
  EnglishLevel: string;
  EmploymentOptions: string;
  PhoneNumber: string;
  Skype: string;
  PhotoPath: string;
  Position: string;
}
