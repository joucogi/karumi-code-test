import { shallowMount, Wrapper } from "@vue/test-utils";
import Vue from "vue";

import EmailInputComponent from "@/components/EmailInputComponent.vue";
import InputComponent from "@/components/InputComponent.vue";

import { checkInputProps, componentExists, toMatchSnapshot } from "../helpers";

let wrapper: Wrapper<Vue>;

beforeEach(() => {
  wrapper = shallowMount(EmailInputComponent);
});

describe("EmailInputComponent", () => {
  it("contents an InputComponent", () => {
    componentExists(wrapper, InputComponent);
  });

  it("shows an InputComponent with empty placeholder", () => {
    const input = wrapper.findComponent(InputComponent);
    checkInputProps(input, "", "email");
  });

  it("shows an InputComponent with Username text in placeholder", async () => {
    const placeholder = "Username";

    wrapper.setProps({
      placeholder
    });
    await wrapper.vm.$nextTick();

    const input = wrapper.findComponent(InputComponent);
    checkInputProps(input, placeholder, "email");
  });

  it("renders correctly", () => {
    toMatchSnapshot(wrapper);
  });
});
