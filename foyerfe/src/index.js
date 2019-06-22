import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './Styles/main.scss';

import createApplicationStore from './create-store';
import App from './App';

const store = createApplicationStore();

/**
 * This establishes the Provider for our App's use of Redux
 */
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


