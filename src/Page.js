import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import RouteNavItem from "./components/RouteNavItem";
import logo from './favicon.ico';
import './Page.css';
import Routes from "./Routes";

class Page extends Component {
	render() {
		return (
			<div className="Page">
				<Navbar fluid collapseOnSelect>
					<Navbar.Header>
						<Navbar.Brand>
							<Link to="/">Dashboard</Link>
							<Link to="/vlans">VLANs</Link>
							<Link to="/dhcps">DHCPs</Link>
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav pullRight>
							<RouteNavItem href="/login">Login</RouteNavItem>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
				<Routes />
				<img src={logo} className="Page-logo" alt="logo" />
			</div>
		);
	}
}

export default Page;
