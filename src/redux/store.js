import React from "react";
import { createStore } from "redux";
import myReducers from "./reducers";
const initialState = {
  candidates: []
};

const store = createStore(
  myReducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
