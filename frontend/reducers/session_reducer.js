import { merge } from 'lodash/merge';

import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';


const SessionReducer = (state = {currentUser: null, errors: []}, action) => {
  debugger
  Object.freeze(state);
  switch (action.type) {

    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, state, currentUser);

    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, state, errors);

    default:
      return state;
  }
  debugger
};

export default SessionReducer;
