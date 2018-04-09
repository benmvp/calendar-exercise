import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import './index.css';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './reducers';
import thunk from 'redux-thunk';


const store = createStore(allReducers, applyMiddleware(thunk));

store.subscribe( () => {
  console.log( '----- STORE CHANGED!-----', store.getState());
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
  );

export default store;
