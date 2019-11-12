import { combineReducers } from 'redux';
import dataQueReducer from './dataQueReducer';
import dataFrameReducer from './dataFrameReducer';

export default combineReducers({
    dataQue: dataQueReducer,
    dataFrame: dataFrameReducer
})