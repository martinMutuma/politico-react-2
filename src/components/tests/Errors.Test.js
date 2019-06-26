import NotFound from "../400/NotFound";
import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import basic_tests from "./Base.test";

test("<Home> Renders without crashing", () => {
  const wrapper = mount(
    <Provider store={store}>
      <NotFound />
    </Provider>
  );
  basic_tests(wrapper, "c-not-found");
});
