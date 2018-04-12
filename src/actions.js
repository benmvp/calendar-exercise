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

