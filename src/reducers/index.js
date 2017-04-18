import { combineReducers } from 'redux';
import PageReducer from './PageReducer';
const rootReducer = combineReducers({
  page: PageReducer
});

export default rootReducer;
