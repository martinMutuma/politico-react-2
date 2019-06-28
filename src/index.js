import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import myReducers from "./redux/reducers";

const initialState = {
  candidates: []
};

const store = createStore(myReducers, initialState);

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
ReactDOM.render(<Root />, document.getElementById("app"));
