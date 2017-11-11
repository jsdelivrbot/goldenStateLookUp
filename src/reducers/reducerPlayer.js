import { FETCH_PLAYERS } from '../actions/index'

export default function (state = [], action) {
    console.log("action received", action);

    switch(action.type) {
        case FETCH_PLAYERS:
        
        return [ action.payload, ...state ];
    }
    return state;
}