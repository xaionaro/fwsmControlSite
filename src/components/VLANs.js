import React, { Component } from "react";
import { connect } from 'react-redux';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { b64MaskToPrefixSize } from '../utils';

class VLANs extends Component {
	constructor(props) {
		super(props);

		this.state = {
			statusText: "",
			vlans: [],
		};
	}

	componentDidMount() {
		fetch('/fwsm/vlans', {
			credentials: 'include',
			headers: {
				'Authorization': `Bearer ${this.props.user.data.token}`
			}
		})
			.then(response => response.json())
			.then(data => this.setState({ statusText: '', vlans: data.result}));
	}

	ipsFormat(ips) {
		if (ips == null) {
			return "";
		}
		return ips.join(", ");
	}
	netsFormat(nets) {
		if (nets == null) {
			return "";
		}
		var netsStr = [];
		nets.map((net) => {
			var maskPrefixSize = b64MaskToPrefixSize(net.Mask);
			netsStr.push(net.IP+"/"+maskPrefixSize);
		});
		return netsStr.join(", ");
	};

	render() {
		return (
			<div>
				<p>{this.state.statusText}</p>
				<BootstrapTable data={this.state.vlans} exportCSV options={{noDataText:"fetching vlans…"}}>
					 <TableHeaderColumn dataField="Index" isKey={true} dataAlign="left" dataSort={true}>id</TableHeaderColumn>

					 <TableHeaderColumn dataField="Name"             dataAlign="center" dataSort={true}>name</TableHeaderColumn>
					 <TableHeaderColumn dataField="SecurityLevel"    dataAlign="center" dataSort={true}>security_level</TableHeaderColumn>
					 <TableHeaderColumn dataField="IPs"              dataAlign="left"   dataSort={true} dataFormat={this.ipsFormat}>ip</TableHeaderColumn>
					 <TableHeaderColumn dataField="AttachedNetworks" dataAlign="left"   dataSort={true} dataFormat={this.netsFormat}>nets</TableHeaderColumn>
				</BootstrapTable>
			</div>
		)
	}
}

export default connect(state => (state))(VLANs)
