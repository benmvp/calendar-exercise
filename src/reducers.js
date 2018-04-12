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
        case 'ADD_EVENT':
            return [...state, {
                id: action.id,
                title: action.title,
                description: action.description,
                color: action.color,
                start: action.start,
                hours: action.hours,
            }]
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

const title = (state = '', action) => {
    switch (action.type) {
        case 'CHANGE_TITLE':
            return action.title;
        default:
            return state;
    }
};

const description = (state = '', action) => {
    switch (action.type) {
        case 'CHANGE_DESCRIPTION':
            return action.description;
        default:
            return state;
    }
};

const inputDate = (state = '', action) => {
    switch (action.type) {
        case 'CHANGE_DATE':
            return action.date;
        default:
            return state;
    }
};

const start = (state = '', action) => {
    switch (action.type) {
        case 'CHANGE_START':
            return action.start;
        default:
            return state;
    }
};


const input = combineReducers({title, description, inputDate, start});

const calendarApp = combineReducers({route, events, date, selectedEventId, input});

export default calendarApp;