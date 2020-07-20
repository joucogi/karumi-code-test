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

const requiresAuth = (
  to: Route,
  from: Route,
  next: Function,
  store: Store<State>
) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.userIsLogged) {
      next({
        path: "/login"
      });
    }
  }
};

const requiresGuest = (
  to: Route,
  from: Route,
  next: Function,
  store: Store<State>
) => {
  if (to.matched.some(record => record.meta.requiresGuest)) {
    if (store.getters.userIsLogged) {
      next({
        path: "/"
      });
    }
  }
};

const validations = [requiresAuth, requiresGuest];

const Auth: Function = (
  store: Store<State>,
  storage: Storage,
  api: LoginApi
) => async (to: Route, from: Route, next: Function) => {
  await restoreToken(store, storage, api);

  validations.forEach(func => func(to, from, next, store));

  next();
};

export default Auth;
