import { Store } from "vuex";

import { LOGIN } from "@/store/mutations";
import State from "@/store/state";
import LoginApi from "@/contracts/login-api";

export default class LoginUser {
  readonly $store: Store<State>;
  readonly $api: LoginApi;

  constructor(store: Store<State>, api: LoginApi) {
    this.$store = store;
    this.$api = api;
  }

  async validate(username: string, password: string): Promise<boolean> {
    const user = await this.$api.getUser(username, password);

    if (user === undefined) {
      return false;
    }

    this.$store.commit(LOGIN, user);
    return true;
  }
}
