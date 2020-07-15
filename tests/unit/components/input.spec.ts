import { shallowMount, Wrapper } from "@vue/test-utils";
import Vue from "vue";
import { BootstrapVue, BFormInput } from "bootstrap-vue";

import InputComponent from "@/components/InputComponent.vue";
import { checkInputProps, componentExists, toMatchSnapshot } from "../helpers";

Vue.use(BootstrapVue);

let wrapper: Wrapper<Vue>;

beforeEach(() => {
  wrapper = shallowMount(InputComponent);
});

describe("Input Component", () => {
  it("contains a BFormInput component", () => {
    componentExists(wrapper, BFormInput);
  });

  it("shows a bFormInput with empty placeholder and type text", () => {
    const bFormInput = wrapper.findComponent(BFormInput);
    checkInputProps(bFormInput, "", "text");
  });

  it("shows a bFormInput with Username text in placeholder and type email", async () => {
    const placeholder = "Username";
    const type = "email";

    wrapper.setProps({
      placeholder,
      type
    });
    await wrapper.vm.$nextTick();

    const bFormInput = wrapper.findComponent(BFormInput);
    checkInputProps(bFormInput, placeholder, type);
  });

  it("renders correctly", () => {
    toMatchSnapshot(wrapper);
  });
});
