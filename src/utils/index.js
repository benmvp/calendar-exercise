const _HOUR_DISPLAY_MAP = [
    '12AM', '1AM', '2AM', '3AM', '4AM', '5AM', '6AM', '7AM', '8AM', '9AM', '10AM', '11AM',
    '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM', '11PM',
]


export const filterEventsByDay = (events, timestamp) => {
  let today = new Date(timestamp).toString();
  today = today.slice(0, 15);

  return events.filter((event) => {
    let current = new Date(event.start).toString().slice(0, 15);
    if (today === current) {
      return event;
    }
  })

}

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

/**
 * Given a numerical timestamp, returns the formatted date string w/o time component
 * @param {number} timestamp - The date to format
 * @returns {string} The formatted date
 */
export const getDisplayDate = (timestamp) => {
  let date = new Date(timestamp).toString();
  let dayOfWeek = date.slice(0,3);
  let middle = 'day, ';
  let monthAndDay = date.slice(4, 10);
  let year = date.slice(11, 16);
  if (dayOfWeek === 'Tue') {
    middle = 's' + middle;
  } else if (dayOfWeek === 'Wed') {
    middle = 'nes' + middle;
  } else if (dayOfWeek === 'Thu') {
    middle = 'rs' + middle;
  }

  return dayOfWeek + middle + monthAndDay + ', '+ year

};

/**
 * Given an hour number, returns a display string version
 * @param {number} hour - The hour
 * @returns {string}
 */
export const getDisplayHour = (hour) => {
  let suffix = 'AM';
  if (hour === 0) {
    hour = 12;
  } else if (hour > 12) {
    hour -= 12;
    suffix = 'PM'
  }
  return hour + suffix;

}

/**
 * Given a list of events, returns the event object whose id matches the specified eventId
 * @param {array} events - List of event objects
 * @param {number} eventId - ID of event to find
 * @returns {object}
 */
export const getEventFromEvents = (events, eventId) => (
  events.find(({id}) => id === eventId)
);
