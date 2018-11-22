import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import appStore from './store';

import BugTracker from './bugTracker';
import Spinner from './spinner';
import axios from 'axios';

window['axios'] = axios;

ReactDOM.render(
	<Provider store={appStore}>
		<div>
			<Spinner />
			<hr/>
			<BugTracker />
		</div>
	</Provider>,
	document.getElementById('root'));