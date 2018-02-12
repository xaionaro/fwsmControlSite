import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import Page from './Page';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Router>
		<Page />
	</Router>,
	document.getElementById('root')
);
registerServiceWorker();
