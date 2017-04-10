const _MONTH_OF_YEAR_MAP = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
]
const _DAY_OF_WEEK_MAP = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];
const _HOUR_DISPLAY_MAP = [
    '12AM', '1AM', '2AM', '3AM', '4AM', '5AM', '6AM', '7AM', '8AM', '9AM', '10AM', '11AM',
    '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM', '11PM',
]

/**
 * Given a list of events and a date, filter the events down to those that
 * fall on the same day as the date
 * @param {array} events - List of event objects
 * @param {Date} timestamp - The timestamp representing the day to match
 * @returns {array}
 */
 // TODO: Implement day filtering!
export const filterEventsByDay = (events, timestamp) => (
    events
);

/**
 * Given a list of events and an hour number, filter the events down to those that
 * start on the specified hour
 * @param {array} events - List of event objects
 * @param {number} hour - The hour to match (0 - 23)
 * @param {array}
 * @returns {array}
 */
export const filterEventsByHour = (events, hour) => (
    events.filter(({start}) => (
        new Date(start)).getHours() === hour
    )
);

export const getDisplayDate = (timestamp) => {
    let date = new Date(timestamp);
    let dayOfMonth = date.getDate();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDay();
    let monthDisplay = _MONTH_OF_YEAR_MAP[month];
    let dayDisplay = _DAY_OF_WEEK_MAP[day];

    return `${dayDisplay}, ${monthDisplay} ${dayOfMonth}, ${year}`;
};

/**
 * Given an hour number, returns a display string version
 * @param {number} hour - The hour
 * @returns {string}
 */
// TODO: Implement using a more programmatic approach instead of map
export const getDisplayHour = (hour) => _HOUR_DISPLAY_MAP[hour]

/**
 * Given a list of events, returns the event object whose id matches the specified eventId
 * @param {array} events - List of event objects
 * @param {number} eventId - ID of event to find
 * @returns {object}
 */
export const getEventFromEvents = (events, eventId) => (
    events.find(({id}) => id === eventId)
)
