import {combineReducers} from 'redux';
import token from './token-reducer';
import note from './note-reducer';

export default combineReducers({
    token,
    note,

});