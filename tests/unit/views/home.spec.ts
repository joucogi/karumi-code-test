import { shallowMount, Wrapper } from "@vue/test-utils";
import Vue from "vue";

import Home from "@/views/Home.vue";
import LogoComponent from "@/components/LogoComponent.vue";
import EmailInputComponent from "@/components/EmailInputComponent.vue";
import PasswordInputComponent from "@/components/PasswordInputComponent.vue";
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

  it("contains an EmailInputComponent", () => {
    componentExists(wrapper, EmailInputComponent);
  });

  it("contains a PasswordEmailInputComponent", () => {
    componentExists(wrapper, PasswordInputComponent);
  });

  it("contains a ButtonComponent", () => {
    componentExists(wrapper, ButtonComponent);
  });

  it("renders correctly", () => {
    toMatchSnapshot(wrapper);
  });
});
