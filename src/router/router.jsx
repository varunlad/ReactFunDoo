import React from "react";
import Signup from "../pages/signup/signup";
import Login from "../pages/loginpage/login";
import ProtectedRoute from "./proctectrouting"
import AuthorRoute from "./authrout";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from "../pages/dashboard/dashboard";

export default function RouterDom() {
  return (
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <AuthorRoute exact path="/" component={Login}/>
          <AuthorRoute path = "/signUp" component = {Signup} />
          <ProtectedRoute path="/dashboard" component={Dashboard} />
        </Switch>
    </Router>
  );
}