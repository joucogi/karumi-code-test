import { shallowMount, Wrapper } from "@vue/test-utils";
import Vue from "vue";
import { BootstrapVue, BFormInput } from "bootstrap-vue";

import InputComponent from "@/components/InputComponent.vue";

Vue.use(BootstrapVue);

let wrapper: Wrapper<Vue>;

beforeEach(() => {
  wrapper = shallowMount(InputComponent);
});

describe("Input Component", () => {
  it("contents BFormInput component", () => {
    expect(wrapper.findComponent(BFormInput).exists()).toBeTruthy();
  });

  it("renders correctly", () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
