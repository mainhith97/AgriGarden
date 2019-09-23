export interface ILogin {
  username: string;
  password: string;
}
export interface IRegister {
  username: string;
  password: string;
  name: string;
  company_name: string;
  email: string;
  address: string;
  telephone: number;
  description: string;
}
export class User {
  id: number;
  username: string;
  password: string;
  name: string;
  // tslint:disable-next-line: variable-name
  company_name: string;
  email: string;
  address: string;
  telephone: number;
  description: string;
  token?: string;
}

