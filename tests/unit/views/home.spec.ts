import { shallowMount, Wrapper } from "@vue/test-utils";
import Vue from "vue";

import Home from "@/views/Home.vue";

let wrapper: Wrapper<Vue>;

beforeEach(() => {
  wrapper = shallowMount(Home);
});

describe("Home.vue", () => {
  it("renders logo when passed", () => {
    expect(wrapper.html()).toContain(
      '<img alt="Karumi logo" src="../assets/logo.png">'
    );
  });

  it("renders correctly", () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
