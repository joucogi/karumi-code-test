import { shallowMount, Wrapper } from "@vue/test-utils";
import Vue from "vue";
import Vuex from "vuex";

import Home from "@/views/Home.vue";
import LogoComponent from "@/components/LogoComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import {
  toMatchSnapshot,
  componentExists,
  createEmptyStore,
  createStoreWithUser
} from "../helpers";
import State from "@/store/state";

Vue.use(Vuex);

let wrapper: Wrapper<Vue>;

beforeEach(() => {
  const store = createEmptyStore(new State());
  wrapper = shallowMount(Home, {
    store
  });
});

describe("Home View", () => {
  it("contains a LogoComponent", () => {
    componentExists(wrapper, LogoComponent);
  });

  it("contains an H2 tag with welcome message when user is not logged in", () => {
    const h2 = wrapper.find("h2");
    expect(h2.text()).toContain("Welcome to your homepage Unknown");
  });

  it("contains an H2 tag with welcome message when user is logged in", () => {
    const store = createStoreWithUser();
    wrapper = shallowMount(Home, {
      store
    });

    const h2 = wrapper.find("h2");
    expect(h2.text()).toContain(`Welcome to your homepage ${name}`);
  });

  it("contains a ButtonComponent", () => {
    componentExists(wrapper, ButtonComponent);
  });

  it("renders correctly when user is not logged in", () => {
    toMatchSnapshot(wrapper);
  });

  it("renders correctly when user is logged in", () => {
    const store = createStoreWithUser();
    wrapper = shallowMount(Home, {
      store
    });

    toMatchSnapshot(wrapper);
  });
});
