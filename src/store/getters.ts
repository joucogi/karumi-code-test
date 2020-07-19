import State from "@/store/state";

export const USER_IS_LOGGED = "userIsLogged";

export default {
  [USER_IS_LOGGED](state: State): boolean {
    return state.user !== undefined;
  }
};
