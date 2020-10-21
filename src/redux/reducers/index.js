import { combineReducers } from 'redux';
import activityReducer from './activity';
import nameReducer from './name';


export default combineReducers({ activity: activityReducer, name:nameReducer});