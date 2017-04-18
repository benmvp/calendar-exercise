import { FETCH_EVENTS, SELECT_EVENT, SELECT_DAY } from '../actions/index';
const INITIAL_STATE = { events: [],
                        day: Date.now(),
                        selectedEventId: undefined
                      };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_EVENTS:
      return { ...state, events: action.payload };
    case SELECT_EVENT:
      return { ...state, selectedEventId: action.payload };
    case SELECT_DAY:
      return { ...state, day: action.payload };
    default:
      return state;
  }
}
