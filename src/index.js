import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./redux/store";

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
ReactDOM.render(<Root />, document.getElementById("app"));
