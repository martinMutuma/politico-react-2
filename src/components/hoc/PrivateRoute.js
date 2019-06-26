import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { useAlert } from "react-alert";
export function isLoggedin() {
  const token = sessionStorage.getItem("token");
  let isLoggedin = false;
  if (token != null) {
    isLoggedin = true;
  }
  return isLoggedin;
}
const PrivateRoute = ({ component: Component, ...rest }) => {
  const MyAlert = useAlert();
  isLoggedin() ? `` : MyAlert.show("Kindly login to access this page");
  return (
    <Route
      {...Route}
      render={props =>
        isLoggedin() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};
export default PrivateRoute;
