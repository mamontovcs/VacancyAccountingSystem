export class Login {
  constructor(Email: string, Password: string, Type: string) {
    this.email = Email;
    this.password = Password;
    this.type = Type;
  }

  email: string;
  password: string;
  type: string;
}
