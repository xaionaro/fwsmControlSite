import React, { Component } from "react";
import "./Dashboard.css";
import Status from "../components/Status";

export default class DashboardView extends Component {
	render() {
		return (
			<div className="Dashboard">
				<div className="contentTitle">
					<h1>Dashboard</h1>
					<Status />
				</div>
			</div>
		);
	}
}
