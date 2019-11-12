import {
    INIT_DATA_FRAME
} from '../actions/types';

const initialState = {
    dataFrame: null
}

export default function(state = initialState, action){
    switch(action.type){
        case INIT_DATA_FRAME:
            return {
                ...state,
                dataFrame: action.payload
            }
        default:
            return state
    }
}