import { createStore, applyMiddleware} from 'redux';
import mainReducer from './Reducer/main-reducer';
// Jerome - this is just a development tool
import {composeWithDevTools} from "redux-devtools-extension";
import reduxReporter from '../src/Middleware/redux-reporter';
import thunkMiddleware from '../src/Middleware/thunk-middleware';

/**
 * Establishes the Redux Store for our app, connecting the mainReducer and thunk middleware.
 * @returns {any}
 */
export default () => {
    return createStore(mainReducer, composeWithDevTools(
        applyMiddleware(thunkMiddleware, reduxReporter)
    ));
};