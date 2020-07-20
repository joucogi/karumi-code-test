import Vue from "vue";
import Vuex from "vuex";
import { Wrapper } from "@vue/test-utils";

import State from "@/store/state";
import User from "@/models/user";
import ResponseApi from "@/models/response-api";
import FakeLoginApi from "@/adapters/fake-login-api";
import ServerMock from "./mocks/server-mock";
import LoginApiMock from "./mocks/login-api-mock";
import LoginUser from "@/services/login-user";
import store from "@/store";
import MemoryStorage from "@/adapters/memory-storage";

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

export const getFakeApiLogin = (response: ResponseApi): FakeLoginApi => {
  const implementation = {
    findUser: jest.fn(() => JSON.stringify(response))
  };
  const server = new (ServerMock(implementation))();

  return new FakeLoginApi(server);
};

export const getLoginUser = (
  user: User | undefined,
  token: string,
  memoryStorage: MemoryStorage
): LoginUser => {
  const implementation = {
    getUser: jest.fn(() => new ResponseApi(user, token))
  };
  const api = new (LoginApiMock(implementation))();
  return new LoginUser(store, api, memoryStorage);
};
