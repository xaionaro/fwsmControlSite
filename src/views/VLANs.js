import React, { Component } from "react";
import "./VLANs.css";
import VLANs from "../components/VLANs";

export default class VLANsView extends Component {

	render() {
		return (
			<div className="VLANs">
				<div className="contentTitle">
					<h1>VLANs</h1>
					<VLANs />
				</div>
			</div>
		);
	}
}
