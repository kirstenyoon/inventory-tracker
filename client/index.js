import React from 'react';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './store';
import ReactDOM from 'react-dom';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('contents')
);
