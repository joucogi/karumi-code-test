import { Route } from "vue-router";
import { Store } from "vuex";

import State from "@/store/state";
import Storage from "@/contracts/storage";
import LoginApi from "@/contracts/login-api";
import User from "@/models/user";
import { LOGIN } from "@/store/mutations";

const restoreToken = async (
  store: Store<State>,
  storage: Storage,
  api: LoginApi
) => {
  const token = storage.getItem("token");
  if (!store.getters.userIsLoggedIn && token !== null) {
    const user: User = await api.getUserByToken(token);
    store.commit(LOGIN, user);
  }
};

const Auth: Function = (
  store: Store<State>,
  storage: Storage,
  api: LoginApi
) => async (to: Route, from: Route, next: Function) => {
  await restoreToken(store, storage, api);

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.userIsLogged) {
      next({
        path: "/login"
      });
    }
  }

  next();
};

export default Auth;
