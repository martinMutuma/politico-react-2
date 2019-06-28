import React from "react";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";

test("Ensures this file does not fail during testing", () => {
  expect(true).toBeTruthy();
});

export default function basic_tests(wrapper, dataTest = null, anotherQ = null) {
  expect(wrapper).toBeTruthy();
  if (dataTest != null) {
    const c_app_div = wrapper.find('[data-test="' + dataTest + '"]');
    expect(c_app_div.length).toBe(1);
  }
}
