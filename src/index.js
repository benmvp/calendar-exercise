import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import './index.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './reducers';


const store = createStore(allReducers);

store.subscribe( () => {
  console.log( '----- STORE CHANGED!-----', store.getState());
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
  );

export default store;
