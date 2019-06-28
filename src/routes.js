import React from "react";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Nav/Nav";
import PrivateRoute from "./components/hoc/PrivateRoute";
import NotFound from "./components/400/NotFound";
import Login from "./components/Login/Login";
import ListCandidates from "./components/Candidates/ListCandidates";

const Routing = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/candidates" component={ListCandidates} />

        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routing;
