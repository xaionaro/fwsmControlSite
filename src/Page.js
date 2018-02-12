import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import './Page.css';


class Page extends Component {
  render() {
    return (
      <div className="Page container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Dashboard</Link>
              <Link to="/vlans">VLANs</Link>
              <Link to="/dhcps">DHCPs</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

export default Page;
