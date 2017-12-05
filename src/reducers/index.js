import { combineReducers } from 'redux';
import DataReducer from './reducer_data';

const rootReducer = combineReducers({
    cards: DataReducer,
});

export default rootReducer;
