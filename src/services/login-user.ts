import { Store } from "vuex";

import { LOGIN, LOGOUT } from "@/store/mutations";
import State from "@/store/state";
import LoginApi from "@/contracts/login-api";
import ResponseApi from "@/models/response-api";
import Storage from "@/contracts/storage";

export default class LoginUser {
  readonly $store: Store<State>;
  readonly $api: LoginApi;
  readonly $storage: Storage;

  constructor(store: Store<State>, api: LoginApi, storage: Storage) {
    this.$store = store;
    this.$api = api;
    this.$storage = storage;
  }

  async validate(username: string, password: string): Promise<boolean> {
    const response: ResponseApi = await this.$api.getUser(username, password);

    if (response.token === "") {
      return false;
    }

    this.$store.commit(LOGIN, response.user);
    this.$storage.setItem("token", response.token);

    return true;
  }

  logout() {
    this.$store.commit(LOGOUT);
    this.$storage.removeItem("token");
  }
}
