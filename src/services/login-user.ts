import { Store } from "vuex";

import User from "@/models/user";
import { LOGIN } from "@/store/mutations";
import State from "@/store/state";

export default class LoginUser {
  readonly user: User = new User("Joel", "joel.coll@gmail.com", "123456");
  readonly $store: Store<State>;

  constructor(store: Store<State>) {
    this.$store = store;
  }

  validate(username: string, password: string): boolean {
    if (username !== this.user.username || password !== this.user.password) {
      return false;
    }

    this.$store.commit(LOGIN, this.user);
    return true;
  }
}
