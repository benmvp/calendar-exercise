import {combineReducers} from 'redux';
import {LOCATION_CHANGE} from 'react-router-redux';

/**
 * Merge route into the global application state
 */
const route = (state = null, action) => {
    switch (action.type) {
        case LOCATION_CHANGE:
            return {
                location: action.payload,
            };
        default:
            return state;
    }
};

const events = (state = [], action) => {
    switch (action.type) {
        case 'GET_EVENTS':
            return action.events;
        default: 
            return state;
    }
};

const date = (state = '', action) => {
    switch (action.type) {
        case 'UPDATE_DATE':
            return action.date;
        default: 
            return state;
    }
};

const selectedEventId = (state = null, action) => {
    switch (action.type) {
        case 'SELECT_EVENT':
            return action.id;
        default:
            return state;
    }
};

const calendarApp = combineReducers({route, events, date, selectedEventId});

export default calendarApp;