import actionTypes from "../actionTypes";
import display_message from "../actions/messageAction";
import storeListCandidates from "../actions/candidates";
import { storeLoggedInUserDetails } from "../actions/userActions";

test("Message action returns correct data", () => {
  const text = "This is the messag";
  const expected = {
    type: actionTypes.DISPLAY_MESSAGE,
    payload: text
  };
  expect(display_message(text)).toEqual(expected);
});

test("Candidates actions Returns Correct data", () => {
  const candidates = [
    { name: "Mock", office: "office", id: 1 },
    { name: "Mock", office: "office2", id: 2 }
  ];
  const expected = {
    type: actionTypes.LIST_CANDIDATES,
    payload: candidates
  };
  expect(storeListCandidates(candidates)).toEqual(expected);
});
test("User actions Returns Correct data", () => {
  const user = { name: "Mock", isadmin: false, id: 1 };

  const expected = {
    type: actionTypes.UPDATE_LOGIN_DETAILS,
    payload: user
  };
  expect(storeLoggedInUserDetails(user)).toEqual(expected);
});
