export class User {
  id: number;
  username: string;
  email: string;
  surname: string;
  password: string;
  token: string;
  authority: number;


  constructor(id: number, username: string, email: string, password: string, token: string, authority: number, surname: string) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.token = token;
    this.authority = authority;
    this.surname = surname;
  }
}
