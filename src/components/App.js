import React, { Component } from "react";
import Routing from "../routes";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import "../css/bootstra.css";
import "../css/app.css";
const options = {
  timeout: 5000,
  position: positions.MIDDLE_RIGHT,
  transition: transitions.SCALE
};
class App extends Component {
  render() {
    return (
      <AlertProvider template={AlertTemplate} {...options}>
        <div className="content" data-test="c-app">
          <Routing />
        </div>
      </AlertProvider>
    );
  }
}
export default App;
