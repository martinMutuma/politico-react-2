import Home from "../Home/Home";
import React from "react";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import basic_tests from "./Base.test";

test("<Home> Renders without crashing", () => {
  const wrapper = mount(
    <Provider store={store}>
      <Home />
    </Provider>
  );
  basic_tests(wrapper, "c-home");
});
