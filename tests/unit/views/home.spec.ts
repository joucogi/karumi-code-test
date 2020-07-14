import { shallowMount, Wrapper } from "@vue/test-utils";
import Vue from "vue";

import Home from "@/views/Home.vue";
import LogoComponent from "@/components/LogoComponent.vue";

let wrapper: Wrapper<Vue>;

beforeEach(() => {
  wrapper = shallowMount(Home);
});

describe("Home View", () => {
  it("contains LogoComponent", () => {
    expect(wrapper.findComponent(LogoComponent).exists()).toBeTruthy();
  });

  it("renders correctly", () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
