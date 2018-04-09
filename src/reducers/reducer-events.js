import data from '../utils/data';

export default (state = data, action) => {
  switch (action.type) {
    case 'UPDATE_EVENTS': {
      state = action.payload;
      break;
    }
  }
  return state;
}