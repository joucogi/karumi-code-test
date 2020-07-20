import Vue from "vue";
import Vuex from "vuex";
import { Wrapper } from "@vue/test-utils";

import State from "@/store/state";
import User from "@/models/user";

export const toMatchSnapshot = (wrapper: Wrapper<Vue>) => {
  expect(wrapper.element).toMatchSnapshot();
};

/* eslint-disable  @typescript-eslint/no-explicit-any */
export const componentExists = (wrapper: Wrapper<Vue>, component: any) => {
  expect(wrapper.findComponent(component).exists()).toBeTruthy();
};

export const checkInputProps = (
  input: Wrapper<Vue>,
  placeholder: string,
  type: string
) => {
  const props = input.props();
  expect(props.placeholder).toBe(placeholder);
  expect(props.type).toBe(type);
};

export const createStore = (state: State) => {
  const getters = {
    userIsLoggedIn: () => state.user !== undefined
  };

  return new Vuex.Store({
    state,
    getters
  });
};

export const createEmptyStore = createStore;

export const createStoreWithUser = () => {
  const state = new State();
  state.user = new User(1, "Joel", "joel", "1234");
  return createStore(state);
};
