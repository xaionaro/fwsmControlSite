import React from 'react';
import { Navbar, ButtonToolbar, Button } from "react-bootstrap";
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
//const DHCPsLink = userIsAuthenticated(() => <NavLink exact to="/dhcps">DHCPs</NavLink>)
const DNATsLink = userIsAuthenticated(() => <NavLink exact to="/dnats">DNATs</NavLink>)
//const RescanLink = userIsAuthenticated(() => <NavLink exact to="/rescan">Rescan</NavLink>)
//const ApplyLink = userIsAuthenticated(() => <NavLink exact to="/apply">Apply</NavLink>)
//const SaveLink = userIsAuthenticated(() => <NavLink exact to="/save">Save</NavLink>)
//const RestoreLink = userIsAuthenticated(() => <NavLink exact to="/restore">Restore</NavLink>)
//const RestoreButton = userIsAuthenticated(() => <Button bsStyle="danger" onClick={}>Restore</Button>)

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
								<DNATsLink />
							</Navbar.Brand>
						</Navbar.Collapse>
						<Navbar.Toggle />
					</Navbar.Header>
				</Navbar>
				<Routes />
				<ButtonToolbar>
				</ButtonToolbar>
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
