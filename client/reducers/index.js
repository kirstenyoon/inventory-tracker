import { combineReducers } from 'redux';
import itemsReducer from './itemsReducer';

// combine reducers
// set up so we could add more reducers
const reducers = combineReducers({
	inventory: itemsReducer,
});

export default reducers;
