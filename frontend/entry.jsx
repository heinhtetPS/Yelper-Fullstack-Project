import React from 'react';
import ReactDOM from 'react-dom';
import * as sessionUtil from './util/session_api_util';

//This function waits for all DOM elements to lead before rendering
//React and redux master components such as store
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  ReactDOM.render(<h1>Welcome to YELPER</h1>, root);

});

window.createNewUser = sessionUtil.createNewUser;
window.loginUser = sessionUtil.loginUser;
window.logoutUser = sessionUtil.logoutUser;
