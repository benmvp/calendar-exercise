import {combineReducers} from 'redux';

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

export default input;