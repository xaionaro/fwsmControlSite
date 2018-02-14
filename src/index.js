import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import Page from './Page';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import * as reducers from './reducers'

const reducer = combineReducers(Object.assign({}, reducers, {}))

const DevTools = createDevTools(
	<DockMonitor toggleVisibilityKey="ctrl-h"
			changePositionKey="ctrl-q">
		<LogMonitor theme="tomorrow" />
	</DockMonitor>
)

const enhancer = compose(
	// Middleware you want to use in development:
	applyMiddleware(thunkMiddleware),
	DevTools.instrument()
)

// Note: passing enhancer as the last argument requires redux@>=3.1.0
const store = createStore(reducer, enhancer)

ReactDOM.render(
	<Provider store={store}>
		<div>
			<Router>
				<Page />
			</Router>
			{/* <DevTools /> */}
		</div>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
