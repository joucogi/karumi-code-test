import User from "@/models/user";

export default class ReponseApi {
  readonly _user: User | undefined;
  readonly _token: string;

  constructor(user: User | undefined, token: string) {
    this._user = user;
    this._token = token;
  }

  get user(): User | undefined {
    return this._user;
  }

  get token(): string {
    return this._token;
  }
}
