import { Switch, Route } from "react-router-dom";
import React from "react";
import Dashboard from "../components/Dashboard";

export default (
  <Switch>
    <Route exact path="/" component={Dashboard} />
  </Switch>
);
