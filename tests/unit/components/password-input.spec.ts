import { shallowMount, Wrapper } from "@vue/test-utils";
import Vue from "vue";

import PasswordInputComponent from "@/components/PasswordInputComponent.vue";
import InputComponent from "@/components/InputComponent.vue";
import { checkInputProps, componentExists, toMatchSnapshot } from "../helpers";

let wrapper: Wrapper<Vue>;

beforeEach(() => {
  wrapper = shallowMount(PasswordInputComponent);
});

describe("PasswordInputComponent", () => {
  it("contains an InputComponent", () => {
    componentExists(wrapper, InputComponent);
  });

  it("shows an InputComponent with empty placeholder", () => {
    const input = wrapper.findComponent(InputComponent);
    checkInputProps(input, "", "password");
  });

  it("shows an InputComponent with Password text in placeholder", async () => {
    const placeholder = "Password";

    wrapper.setProps({
      placeholder
    });
    await wrapper.vm.$nextTick();

    const input = wrapper.findComponent(InputComponent);
    checkInputProps(input, placeholder, "password");
  });

  it("renders correctly", () => {
    toMatchSnapshot(wrapper);
  });
});
