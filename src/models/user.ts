export default class User {
  readonly _name: string;
  readonly _username: string;
  readonly _password: string;

  constructor(name: string, username: string, password: string) {
    this._name = name;
    this._username = username;
    this._password = password;
  }

  get name(): string {
    return this._name;
  }
  get username(): string {
    return this._username;
  }
  get password(): string {
    return this._password;
  }
}
