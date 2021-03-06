import { shallowMount, Wrapper } from "@vue/test-utils";
import Vue from "vue";
import Vuex from "vuex";

import Home from "@/views/Home.vue";
import LogoComponent from "@/components/LogoComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import {
  toMatchSnapshot,
  componentExists,
  createStoreWithUser
} from "../helpers";
import LoginUserMock from "../mocks/login-user-mock";

Vue.use(Vuex);

let wrapper: Wrapper<Vue>;
const login = new LoginUserMock();

beforeEach(() => {
  const store = createStoreWithUser();
  wrapper = shallowMount(Home, {
    store,
    provide: {
      login
    }
  });
});

describe("Home View", () => {
  it("contains a LogoComponent", () => {
    componentExists(wrapper, LogoComponent);
  });

  it("contains an H2 tag with welcome message", () => {
    const h2 = wrapper.find("h2");
    expect(h2.text()).toContain(`Welcome to your homepage ${name}`);
  });

  it("contains a ButtonComponent", () => {
    componentExists(wrapper, ButtonComponent);
  });

  it("renders correctly", () => {
    toMatchSnapshot(wrapper);
  });
});
