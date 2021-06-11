export class User {
  id: number;
  username: string;
  password: string;
  token: string;
  authority: number;


  constructor(id: number, username: string, password: string, token: string, authority: number) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.token = token;
    this.authority = authority;
  }
}
