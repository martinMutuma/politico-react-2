import actionTypes from "../actionTypes";

const displayMessage = (state = "", action) => {
  switch (action.type) {
    case actionTypes.DISPLAY_MESSAGE:
      return action.payload;
    default:
      return state;
  }
};

export default displayMessage;
