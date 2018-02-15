import React from 'react';
import { Navbar } from "react-bootstrap";
import logo from './favicon.ico';
import './Page.css';
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
import Routes from "./Routes";
import { connect } from 'react-redux'
import { logout } from './actions/user'

import { userIsAuthenticated } from './auth'

/*const getUserName = user => {
	if (user.data) {
		return `${user.data.user.Username}`;
	}
	return `guest`;
}

// Only show login when the user is not logged in and logout when logged in
// Could have also done this with a single wrapper and `FailureComponent`
const UserName = ({ user }) => (<div className="username">{getUserName(user)}</div>)
const LoginLink = userIsNotAuthenticated(() => <NavLink activeClassName="active" to="/login">Login</NavLink>)
const LogoutLink = userIsAuthenticated(({ logout }) => <button onClick={() => logout()}>Logout</button>)*/

const DashboardLink = userIsAuthenticated(() => <NavLink exact to="/">Dashboard</NavLink>)
const VLANsLink = userIsAuthenticated(() => <NavLink exact to="/vlans">VLANs</NavLink>)
const DHCPsLink = userIsAuthenticated(() => <NavLink exact to="/dhcps">DHCPs</NavLink>)

function Page({ user, logout }) {
	return (
		<Router>
			<div className="Page">
				<Navbar fluid collapseOnSelect>
					<Navbar.Header>
						<Navbar.Collapse>
							<Navbar.Brand>
								<DashboardLink />
								<VLANsLink />
								<DHCPsLink />
							</Navbar.Brand>
						</Navbar.Collapse>
						<Navbar.Toggle />
					</Navbar.Header>
				</Navbar>
				<Routes />
				<img src={logo} className="Page-logo" alt="logo" />
			</div>
		</Router>
	);
/*					<Nav pullRight>
							<LoginLink />
							<LogoutLink logout={logout} />
							<UserName user={user} />
					</Nav>
*/
}


const mapStateToProps = state => ({
	user: state.user
})

export default connect(mapStateToProps, { logout })(Page)
