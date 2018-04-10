export default (state = null, action) => {
  switch (action.type) {
    case 'SELECT_EVENT_ID': {
      state = action.payload;
      break;
    }
  }
  return state;
}