import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as businessUtil from './util/business_api_util';
import { fetchABusiness, fetchBusinesses } from './actions/business_actions';

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

window.fetchABusiness = fetchABusiness;
window.fetchBusinesses = fetchBusinesses;
window.fetchSingleBusiness = businessUtil.fetchSingleBusiness;
window.fetchAllBusinesses = businessUtil.fetchAllBusinesses;
window.createNewBusiness = businessUtil.createNewBusiness;
