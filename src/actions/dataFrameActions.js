import {
    INIT_DATA_FRAME
} from './types';

export const initDataFrame = matrix => dispatch => {
    dispatch({
        type: INIT_DATA_FRAME,
        payload: matrix
    })
}