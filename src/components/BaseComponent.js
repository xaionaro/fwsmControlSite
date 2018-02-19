import { Component } from "react";
//import { connect } from 'react-redux';

export class BaseComponent extends Component {
	api(resource, options, parameters, callback) {
		options.credentials = 'include';
		options.headers = { 'Authorization': `Bearer ${this.props.user.data.token}` };
		return fetch('/fwsm/'+resource, options)
			.then(response => response.json())
			.then(data => callback(data));
	}
}

//export default connect(state => (state))(BaseComponent)
