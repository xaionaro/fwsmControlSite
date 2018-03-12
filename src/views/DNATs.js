import React, { Component } from "react";
import "./DNATs.css";
import DNATs from "../components/DNATs";

export default class DNATsView extends Component {

	render() {
		return (
			<div className="DNATs">
				<div className="contentTitle">
					<h1>DNATs</h1>
					<DNATs />
				</div>
			</div>
		);
	}
}
