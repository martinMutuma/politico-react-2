import App from "../App";
import React from "react";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";

test("<App> redders without crashing", () => {
  const wrapper = mount(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(wrapper).toBeTruthy();
  const c_app_div = wrapper.find('[data-test="c-app"]');
  expect(c_app_div.length).toBe(1);
});
