import { shallowMount, Wrapper } from "@vue/test-utils";
import Vue from "vue";

import LogoComponent from "@/components/LogoComponent.vue";

let wrapper: Wrapper<Vue>;

beforeEach(() => {
  wrapper = shallowMount(LogoComponent);
});

describe("Logo Component", () => {
  it("renders image logo when passed", () => {
    expect(wrapper.html()).toContain(
      '<img alt="Karumi logo" src="../assets/logo.png">'
    );
  });

  it("renders correctly", () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
