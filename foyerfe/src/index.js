import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.scss';
import createApplicationStore from './create-store';
import App from './App';

const store = createApplicationStore();


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


