import actionTypes from "../actionTypes";
const display_message = message => {
  return {
    type: actionTypes.DISPLAY_MESSAGE,
    payload: message
  };
};
export default display_message;
