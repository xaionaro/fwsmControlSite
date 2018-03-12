import React from "react";
import { BaseComponent } from "./BaseComponent";
import { connect } from 'react-redux';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { b64MaskToPrefixSize, ipportFormat, ipportsFormat } from '../utils';

class DNATs extends BaseComponent {
	constructor(props) {
		super(props);

		this.state = {
			statusText: "",
			dnats: [],
		};
	}

	componentDidMount() {
		this.api('dnats', {}, {}, data => this.setState({ statusText: '', dnats: data.result}));
	}

	onAfterInsertRow(row) {
		console.log(this, 'inserting', row);
	}

	onDeleteRow(keys, dnats) {
		console.log(this, 'deleting', keys, dnats);
		this.api('dnats/'+keys.join(','), {method: 'DELETE'}, {}, data => this.afterDeleteRow(data));
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
		if (window.confirm(`Are you sure you want to delete DNATs: ${dropRowKeysStr}?`)) {
			// If the confirmation is true, call the function that
			// continues the deletion of the record.
			next();
		}
	}

	render() {
		return (
			<div>
				<p>{this.state.statusText}</p>
				<BootstrapTable data={this.state.dnats} exportCSV search={true} hover={true} options={{noDataText:"fetching DNATs…", afterInsertRow: this.onAfterInsertRow.bind(this), onDeleteRow: this.onDeleteRow.bind(this), handleConfirmDeleteRow: this.customConfirm.bind(this)}}>
					 <TableHeaderColumn dataField="Destinations" isKey={true} dataAlign="right" dataSort={true} dataFormat={ipportsFormat} headerText="Destination">dst</TableHeaderColumn>

					 <TableHeaderColumn dataField="NATTo"                     dataAlign="left"  dataSort={true} dataFormat={ipportFormat} headerText="NAT to">nat_to</TableHeaderColumn>
				</BootstrapTable>
			</div>
		)
	}
}
				//<BootstrapTable data={this.state.vlans} exportCSV search={true} hover={true} options={{noDataText:"fetching vlans…", afterInsertRow: this.onAfterInsertRow.bind(this), onDeleteRow: this.onDeleteRow.bind(this), handleConfirmDeleteRow: this.customConfirm.bind(this)}}>

export default connect(state => (state))(DNATs)
