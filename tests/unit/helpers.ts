import { Wrapper, VueClass } from "@vue/test-utils";
import Vue from "vue";

export const toMatchSnapshot = (wrapper: Wrapper<Vue>) => {
  expect(wrapper.element).toMatchSnapshot();
};

export const componentExists = (
  wrapper: Wrapper<Vue>,
  component: VueClass<Vue>
) => {
  expect(wrapper.findComponent(component).exists()).toBeTruthy();
};

export const checkInputProps = (
  input: Wrapper<Vue>,
  placeholder: string,
  type: string
) => {
  const props = input.props();
  expect(props.placeholder).toBe(placeholder);
  expect(props.type).toBe(type);
};
