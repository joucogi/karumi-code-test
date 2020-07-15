import { shallowMount, Wrapper } from "@vue/test-utils";
import Vue from "vue";

import Home from "@/views/Home.vue";
import LogoComponent from "@/components/LogoComponent.vue";
import EmailInputComponent from "@/components/EmailInputComponent.vue";
import PasswordInputComponent from "@/components/PasswordInputComponent.vue";

let wrapper: Wrapper<Vue>;

beforeEach(() => {
  wrapper = shallowMount(Home);
});

describe("Home View", () => {
  it("contains LogoComponent", () => {
    expect(wrapper.findComponent(LogoComponent).exists()).toBeTruthy();
  });

  it("contains EmailInputComponent", () => {
    expect(wrapper.findComponent(EmailInputComponent).exists()).toBeTruthy();
  });

  it("contains PasswordEmailInputComponent", () => {
    expect(wrapper.findComponent(PasswordInputComponent).exists()).toBeTruthy();
  });

  it("renders correctly", () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
