import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import NotFound from "./views/NotFound";
import Login from "./views/Login";

export default () =>
	<Switch>
		<Route path="/" exact component={Dashboard} />
		<Route path="/login" exact component={Login} />
		<Route component={NotFound} />
	</Switch>;
