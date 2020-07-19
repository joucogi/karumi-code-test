import { Route } from "vue-router";
import { Store } from "vuex";
import State from "@/store/state";

const Auth: Function = (store: Store<State>) => (
  to: Route,
  from: Route,
  next: Function
) => {
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
