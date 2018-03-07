import { combineReducers } from 'redux';
import homeReducer from './homeReducer';

// Reducers will be given to combineReducers to create a single global store

const rootReducer = combineReducers({
    homeReducer,
});

export default rootReducer;
