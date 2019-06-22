import { createStore, applyMiddleware} from 'redux';
import mainReducer from './Reducer/main-reducer';
// Jerome - this is just a development tool
import {composeWithDevTools} from "redux-devtools-extension";
import reduxReporter from '../src/Middleware/redux-reporter';
import thunkMiddleware from '../src/Middleware/thunk-middleware';

export default () => {
    return createStore(mainReducer, composeWithDevTools(
        applyMiddleware(thunkMiddleware, reduxReporter)
    ));
};