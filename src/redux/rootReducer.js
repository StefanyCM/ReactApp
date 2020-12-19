import { combineReducers } from 'redux';
import { ComicsReducer }  from '../services/comics/comicsSlice'

export default combineReducers({
    comics: ComicsReducer,
});