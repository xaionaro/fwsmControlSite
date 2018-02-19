import React, { Component } from "react";
import { connect } from 'react-redux';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class Status extends Component {
	constructor(props) {
		super(props);

		this.state = {
			statusText: "",
			bwmStatistics: [],
		};
	}

	componentDidMount() {
		fetch('/fwsm/status', {
			credentials: 'include',
			headers: {
				'Authorization': `Bearer ${this.props.user.data.token}`
			}
		})
			.then(response => response.json())
			.then(data => this.setState({ statusText: '', bwmStatistics: data.result}));
	}

	render() {
		return (
			<div>
				<h2>Interfaces</h2>
				<p>{this.state.statusText}</p>
				<BootstrapTable data={this.state.bwmStatistics} exportCSV search={true} hover={true} options={{noDataText:"collecting statistics… (wait for 5 seconds)"}}>
					 <TableHeaderColumn dataField="Iface" isKey={true} dataAlign="left" dataSort={true}>iface</TableHeaderColumn>

					 <TableHeaderColumn dataField="BytesOutPS"      dataAlign="center" dataSort={true}>bytes_out/s</TableHeaderColumn>
					 <TableHeaderColumn dataField="BytesInPS"       dataAlign="center" dataSort={true}>bytes_in/s</TableHeaderColumn>
					 <TableHeaderColumn dataField="BytesTotalPS"    dataAlign="center" dataSort={true}>bytes_total/s</TableHeaderColumn>
					 <TableHeaderColumn dataField="BytesOutTotal"   dataAlign="center" dataSort={true}>bytes_out</TableHeaderColumn>
					 <TableHeaderColumn dataField="BytesInTotal"    dataAlign="center" dataSort={true}>bytes_in</TableHeaderColumn>

					 <TableHeaderColumn dataField="PacketsOutPS"    dataAlign="center" dataSort={true}>packets_out/s</TableHeaderColumn>
					 <TableHeaderColumn dataField="PacketsInPS"     dataAlign="center" dataSort={true}>packets_in/s</TableHeaderColumn>
					 <TableHeaderColumn dataField="PacketsTotalPS"  dataAlign="center" dataSort={true}>packets_total/s</TableHeaderColumn>
					 <TableHeaderColumn dataField="PacketsOutTotal" dataAlign="center" dataSort={true}>packets_out</TableHeaderColumn>
					 <TableHeaderColumn dataField="PacketsInTotal"  dataAlign="center" dataSort={true}>packets_in</TableHeaderColumn>

					 <TableHeaderColumn dataField="ErrorsOutPS"     dataAlign="center" dataSort={true}>errors_out/s</TableHeaderColumn>
					 <TableHeaderColumn dataField="ErrorsInPS"      dataAlign="center" dataSort={true}>errors_in/s</TableHeaderColumn>
					 <TableHeaderColumn dataField="ErrorsOutTotal"  dataAlign="center" dataSort={true}>errors_out</TableHeaderColumn>
					 <TableHeaderColumn dataField="ErrorsInTotal"   dataAlign="center" dataSort={true}>errors_in</TableHeaderColumn>
				</BootstrapTable>
			</div>
		)
	}
}

export default connect(state => (state))(Status)
