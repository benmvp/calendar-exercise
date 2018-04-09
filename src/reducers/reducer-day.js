export default (state = Date.now(), action) => {
  switch (action.type) {
    case 'UPDATE_DAY': {
      state = action.payload;
      break;
    }
  }
  return state;
}