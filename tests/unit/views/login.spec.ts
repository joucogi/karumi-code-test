import { shallowMount, Wrapper } from "@vue/test-utils";
import Vue from "vue";

import Login from "@/views/Login.vue";
import LogoComponent from "@/components/LogoComponent.vue";
import EmailInputComponent from "@/components/EmailInputComponent.vue";
import PasswordInputComponent from "@/components/PasswordInputComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import { toMatchSnapshot, componentExists } from "../helpers";

import LoginUserMock from "../mocks/login-user-mock";
import ValidatorMock from "../mocks/validator-mock";

let wrapper: Wrapper<Vue>;
const login = new LoginUserMock();
const validatorImplementation: Record<string, jest.Mock> = {
  emailIsValid: jest.fn()
};
const validator = new (ValidatorMock(validatorImplementation))();

describe("Login View", () => {
  beforeEach(() => {
    wrapper = shallowMount(Login, {
      stubs: ["b-form-input", "b-button"],
      provide: {
        login,
        validator
      }
    });
  });

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

  it("contains an empty span tag with error message", () => {
    const span = wrapper.find("span");
    expect(span.text()).toContain("");
  });

  it("when button is clicked validate method from login service is not called when username is empty", async () => {
    const button = wrapper.find("#btnLogin");
    await button.vm.$emit("click");
    expect(login.validate.mock.calls.length).toBe(0);
  });

  it("renders correctly", () => {
    toMatchSnapshot(wrapper);
  });
});

describe("Login View and username is not valid", () => {
  beforeEach(() => {
    wrapper = shallowMount(Login, {
      stubs: ["b-form-input", "b-button"],
      provide: {
        login,
        validator
      }
    });
  });

  it("when button is clicked, validate method from login service is not called", async () => {
    const button = wrapper.find("#btnLogin");
    await button.vm.$emit("click");
    expect(login.validate.mock.calls.length).toBe(0);
  });
});

describe("Login View and username is valid", () => {
  beforeEach(() => {
    const validatorImplementation: Record<string, jest.Mock> = {
      emailIsValid: jest.fn(() => true)
    };
    const validator = new (ValidatorMock(validatorImplementation))();

    wrapper = shallowMount(Login, {
      stubs: ["b-form-input", "b-button"],
      provide: {
        login,
        validator
      }
    });
  });

  it("when button is clicked, validate method from login service is not called", async () => {
    const button = wrapper.find("#btnLogin");
    await button.vm.$emit("click");
    expect(login.validate.mock.calls.length).toBe(1);
  });
});
