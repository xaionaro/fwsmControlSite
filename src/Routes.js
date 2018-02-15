import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import NotFound from "./views/NotFound";
import Login from "./views/Login";
import VLANs from "./views/VLANs";
import DHCPs from "./views/DHCPs";
import { userIsAuthenticatedRedir, userIsNotAuthenticatedRedir } from './auth'

export default () =>
	<Switch>
		<Route path="/" exact component={userIsAuthenticatedRedir(Dashboard)} />
		<Route path="/vlans" exact component={userIsAuthenticatedRedir(VLANs)} />
		<Route path="/dhcps" exact component={userIsAuthenticatedRedir(DHCPs)} />
		<Route path="/login" exact component={userIsNotAuthenticatedRedir(Login)} />
		<Route component={NotFound} />
	</Switch>;
