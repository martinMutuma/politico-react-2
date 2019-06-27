import ListCandidates from "../Candidates/ListCandidates";
import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import basic_tests from "./Base.test";
import mockAxios from "jest-mock-axios";
import constants from "jest-haste-map/build/constants";

test("<ListCandidates> Renders without crashing", () => {
  const candidates = [
    {
      candidate_name: "Name WRFcBVxsXvVymga osXdUSoAQ",
      candidate_office_id: 2,
      candidate_passport: "www.url.com/PDwXaULSg",
      candidate_user_id: 4,
      candidatev_id: 1,
      office_name: "You president",
      office_type: "local government",
      party_id: null
    },
    {
      candidate_name: "Name TortaSaxNvEZCrN lRYNijfgy",
      candidate_office_id: 1,
      candidate_passport: "www.url.com/liuhJcIOT",
      candidate_user_id: 8,
      candidatev_id: 2,
      office_name: "Chairman",
      office_type: "legislative",
      party_id: null
    }
  ];
  const wrapper = mount(
    <Provider store={store}>
      <ListCandidates />
    </Provider>
  );
  basic_tests(wrapper, "c-list-candidates");
  wrapper.instance().componentDidMount();
  mockAxios.mockResponse(candidates);
  expect(mockAxios.get).toHaveBeenCalled();
  
});
