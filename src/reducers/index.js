import {combineReducers} from 'redux';
import home from './homeReducer';
import input from './inputReducer';

const calendarApp = combineReducers({home, input});

export default calendarApp;