import { shallowMount, Wrapper } from "@vue/test-utils";
import Vue from "vue";
import VueRouter from "vue-router";

import App from "@/App.vue";
import { toMatchSnapshot } from "./helpers";

Vue.use(VueRouter);

let wrapper: Wrapper<Vue>;

beforeEach(() => {
  wrapper = shallowMount(App);
});

describe("App.vue", () => {
  it("renders correctly", () => {
    toMatchSnapshot(wrapper);
  });
});
