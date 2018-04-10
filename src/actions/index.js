import store from '../index.js'


export const handleSelectEventId = (selectedEventId) => (dispatch, getState) => {
  console.log('testing--', selectedEventId)
  return dispatch({
    type: 'SELECT_EVENT_ID',
    payload: selectedEventId
  });
};

// refactor to 1 function, takes in a param to say prev or next

export const handlePrev = () => (dispatch, getState) => {
  return dispatch({
    type: 'UPDATE_DAY',
    payload: (store.getState().day - 86400000)
  });
};

export const handleNext = () => (dispatch, getState) => {
  return dispatch({
    type: 'UPDATE_DAY',
    payload: (store.getState().day + 86400000)
  });
};


export const addEvent = (newEvent) => (dispatch, getState) => {
  return dispatch({
    type: 'UPDATE_EVENTS',
    payload: store.getState().events.concat([newEvent])
  })
}