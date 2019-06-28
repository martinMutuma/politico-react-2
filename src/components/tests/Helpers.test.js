import ShowAlert, { ShowAlertComponent } from "../Helpers/Alert";
import React from "react";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import basic_tests from "./Base.test";

test("<ShowAlert> Renders without crashing", async () => {
  const alert = { success: jest.fn() };
  const wrapper = shallow(
    <ShowAlertComponent alert={alert} message="This is a test message" />
  );
  basic_tests(wrapper, "c-alert");
  await wrapper.instance().componentDidMount();
  expect(alert.success).toHaveBeenCalled();
});
test("<ShowAlert> Renders without crashing on pudate", async () => {
  const alert = { success: jest.fn() };
  const presviousMessage = { message: "Previous message" };
  const wrapper = shallow(
    <ShowAlertComponent alert={alert} message="This is a test message" />
  );
  basic_tests(wrapper, "c-alert");
  await wrapper.instance().componentDidUpdate(presviousMessage);
  expect(alert.success).toHaveBeenCalled();
});
