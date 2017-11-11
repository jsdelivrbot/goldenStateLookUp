import { combineReducers } from 'redux';
import PlayerReducer from '../reducers/reducerPlayer';

const rootReducer = combineReducers({
    players: PlayerReducer
});

export default rootReducer;
