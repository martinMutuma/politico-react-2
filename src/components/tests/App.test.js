import App from "../App";
import React from "react";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import basic_tests from "./Base.test";

test("<App> Renders without crashing", () => {
  const wrapper = mount(
    <Provider store={store}>
      <App />
    </Provider>
  );
  basic_tests(wrapper, "c-app");
});
