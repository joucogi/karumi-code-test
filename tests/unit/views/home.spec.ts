import { shallowMount, Wrapper } from "@vue/test-utils";
import Vue from "vue";

import Home from "@/views/Home.vue";
import LogoComponent from "@/components/LogoComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import { toMatchSnapshot, componentExists } from "../helpers";

let wrapper: Wrapper<Vue>;

beforeEach(() => {
  wrapper = shallowMount(Home);
});

describe("Home View", () => {
  it("contains a LogoComponent", () => {
    componentExists(wrapper, LogoComponent);
  });

  it("contains an H2 tag with welcome message", () => {
    const h2 = wrapper.find("h2");
    expect(h2.text()).toContain("Welcome to your homepage Joel");
  });

  it("contains a ButtonComponent", () => {
    componentExists(wrapper, ButtonComponent);
  });

  it("renders correctly", () => {
    toMatchSnapshot(wrapper);
  });
});
