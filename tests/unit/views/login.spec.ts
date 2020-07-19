import { shallowMount, Wrapper } from "@vue/test-utils";
import Vue from "vue";

import Login from "@/views/Login.vue";
import LogoComponent from "@/components/LogoComponent.vue";
import EmailInputComponent from "@/components/EmailInputComponent.vue";
import PasswordInputComponent from "@/components/PasswordInputComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import { toMatchSnapshot, componentExists } from "../helpers";

import LoginUserMock from "../mocks/login-user-mock";

let wrapper: Wrapper<Vue>;
const login = new LoginUserMock();

beforeEach(() => {
  wrapper = shallowMount(Login, {
    stubs: ["b-form-input", "b-button"],
    provide: {
      login
    }
  });
});

describe("Login View", () => {
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

  it("contains an span tag with error message", () => {
    const span = wrapper.find("span");
    expect(span.text()).toContain(
      "The username or password you’ve entered is incorrect"
    );
  });

  it("when button is clicked validate method from login service is called", async () => {
    const button = wrapper.find("#btnLogin");
    await button.vm.$emit("click");
    expect(login.validate.mock.calls.length).toBe(1);
  });

  it("renders correctly", () => {
    toMatchSnapshot(wrapper);
  });
});
