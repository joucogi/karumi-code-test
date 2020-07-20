export default class User {
  readonly _id: number;
  readonly _name: string;
  readonly _username: string;
  readonly _password: string;

  constructor(id: number, name: string, username: string, password: string) {
    this._id = id;
    this._name = name;
    this._username = username;
    this._password = password;
  }

  get id(): number {
    return this._id;
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
