const uuid = require('uuid/v4');

/**
 * @return {object} An action object with a type of GET_EVENTS
 */
export const getEvents = (events) => ({
    type: 'GET_EVENTS',
    events,
});

/**
 * @return {object} An action object with a type of UPDATE_DATE
 */
export const updateDate = (date) => ({
    type: 'UPDATE_DATE',
    date,
});

/**
 * @return {object} An action object with a type of SELECT_EVENT
 */
export const selectEvent = (id) => ({
    type: 'SELECT_EVENT',
    id,
});

/**
 * @return {object} An action object with a type of CHANGE_*
 */
export const changeInput = (name, value) => ({
    type: `CHANGE_${name.toUpperCase()}`,
    [name]: value,
});

/**
 * @return {object} An action object with a type of ADD_EVENT
 */
export const addEvent = (title, description, start) => ({
    type: 'ADD_EVENT',
    id: uuid(),
    title,
    description,
    start,
    hours: 1,
    color: 'sky',
});