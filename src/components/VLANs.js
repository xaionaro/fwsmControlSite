import React from "react";
import { BaseComponent } from "./BaseComponent";
import { connect } from 'react-redux';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { b64MaskToPrefixSize } from '../utils';

class VLANs extends BaseComponent {
	constructor(props) {
		super(props);

		this.state = {
			statusText: "",
			vlans: [],
		};
	}

	componentDidMount() {
		this.api('vlans', {}, {}, data => this.setState({ statusText: '', vlans: data.result}));
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
			return true;
		});
		return netsStr.join(", ");
	};

	onAfterInsertRow(row) {
		console.log(this, 'inserting', row);
	}

	onDeleteRow(keys, vlans) {
		console.log(this, 'deleting', keys, vlans);
		this.api('vlans/'+keys.join(','), {method: 'DELETE'}, {}, data => this.afterDeleteRow(data));
	}

	afterDeleteRow(data) {
		console.log(data);
		this.componentDidMount();
		if (data.status === "ERROR") {
			alert(data.error_description);
		}
	}

	customConfirm(next, dropRowKeys) {
		const dropRowKeysStr = dropRowKeys.sort(function(a, b) {return a-b}).join(',');
		if (window.confirm(`Are you sure you want to delete VLANs: ${dropRowKeysStr}?`)) {
			// If the confirmation is true, call the function that
			// continues the deletion of the record.
			next();
		}
	}

	render() {
		return (
			<div>
				<p>{this.state.statusText}</p>
				<BootstrapTable data={this.state.vlans} exportCSV search={true} hover={true} selectRow={{mode: 'checkbox'}} insertRow={true} deleteRow={true} options={{noDataText:"fetching vlans…", afterInsertRow: this.onAfterInsertRow.bind(this), onDeleteRow: this.onDeleteRow.bind(this), handleConfirmDeleteRow: this.customConfirm.bind(this)}}>
					 <TableHeaderColumn dataField="Index" isKey={true} dataAlign="left" dataSort={true} headerText="VLAN id">id</TableHeaderColumn>

					 <TableHeaderColumn dataField="Name"             dataAlign="center" dataSort={true} headerText="Name">name</TableHeaderColumn>
					 <TableHeaderColumn dataField="SecurityLevel"    dataAlign="center" dataSort={true} headerText="Security level">security_level</TableHeaderColumn>
					 <TableHeaderColumn dataField="IPs"              dataAlign="left"   dataSort={true} headerText="IPs" dataFormat={this.netsFormat}>ip</TableHeaderColumn>
				</BootstrapTable>
			</div>
		)
	}
}

export default connect(state => (state))(VLANs)
