import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import NotFound from "./views/NotFound";
import Login from "./views/Login";
import VLANs from "./views/VLANs";
import DNATs from "./views/DNATs";
import { userIsAuthenticatedRedir, userIsNotAuthenticatedRedir } from './auth'

export default () =>
	<Switch>
		<Route path="/" exact component={userIsAuthenticatedRedir(Dashboard)} />
		<Route path="/vlans" exact component={userIsAuthenticatedRedir(VLANs)} />
		<Route path="/dnats" exact component={userIsAuthenticatedRedir(DNATs)} />
		<Route path="/login" exact component={userIsNotAuthenticatedRedir(Login)} />
		<Route component={NotFound} status={404} />
	</Switch>;
