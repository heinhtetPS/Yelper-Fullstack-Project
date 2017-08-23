import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as sessionUtil from './util/session_api_util';

//This function waits for all DOM elements to lead before rendering
//React and redux master components such as store
document.addEventListener('DOMContentLoaded', () => {

  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);

});

window.createNewUser = sessionUtil.createNewUser;
window.loginUser = sessionUtil.loginUser;
window.logoutUser = sessionUtil.logoutUser;
