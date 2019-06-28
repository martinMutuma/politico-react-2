import React from "react";
import { combineReducers } from "redux";
import candidates from "./candidateReducer";
import displayMessage from "./messageReducer";

export default combineReducers({
  candidates: candidates,
  message: displayMessage
});
