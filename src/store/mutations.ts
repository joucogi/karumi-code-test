import Vue from "vue";

import State from "@/store/state";
import User from "@/models/user";

export const LOGIN = "login";
export const LOGOUT = "logout";

export default {
  [LOGIN](state: State, user: User) {
    Vue.set(state, "user", user);
  },

  [LOGOUT](state: State) {
    Vue.set(state, "user", undefined);
  }
};
