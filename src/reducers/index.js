import {combineReducers} from 'redux';
import eventsReducer from './reducer-events.js';
import dayReducer from './reducer-day.js';
import selecteEventIdReducer from './reducer-selected-event-id.js';


const allReducers = combineReducers({
  events: eventsReducer,
  day: dayReducer,
  selectedEventId: selecteEventIdReducer
});

export default allReducers;