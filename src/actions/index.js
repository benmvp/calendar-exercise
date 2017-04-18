import DATA_SET from '../utils/data';

export const FETCH_EVENTS = 'FETCH_EVENTS';
export const SELECT_EVENT = 'SELECT_EVENT';
export const SELECT_DAY = 'SELECT_DAY';

export function fetchEvents() {
  return {
    type: FETCH_EVENTS,
    payload: DATA_SET
  };
}

export function selectEvent(id) {
  return {
    type: SELECT_EVENT,
    payload: id
  }
}

export function selectDay(day) {
  return {
    type: SELECT_DAY,
    payload: day
  }
}
