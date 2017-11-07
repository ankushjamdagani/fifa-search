import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './scss/main.scss';
import App from './app';

import configureStore from './store.js';

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<App store={store}/> 
	</Provider>,
	document.getElementById('root')
);