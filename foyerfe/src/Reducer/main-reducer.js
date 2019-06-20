import {combineReducers} from 'redux';
import token from './token-reducer';
import note from './note-reducer';
import favorites from './favorites-reducer'

export default combineReducers({
    token,
    favorites,
    note,
});