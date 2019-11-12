import {
    ADD_DATA
} from '../actions/types';

const initialState = {
    data: []
}

export default function(state = initialState, action){
    switch(action.type){
        case ADD_DATA:
            return {
                ...state,
                data: [ ...state.data, action.payload ]
            }
        default:
            return state;
    }
}