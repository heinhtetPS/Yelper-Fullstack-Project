import { merge } from 'lodash';
//Either import merge with no brackets from lodash/merge OR use no brackets and just from lodash

import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';


const SessionReducer = (state = {currentUser: null, errors: []}, action) => {

  Object.freeze(state);
  // debugger
  switch (action.type) {

    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, {currentUser: null, errors: []}, {currentUser});

//this is wrong, it doesn't merge correctly, need to merge errors into the errors array that's already in state
//attempted fix 1
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, {currentUser: null, errors: []}, errors);

    default:
      return state;
  }

};

export default SessionReducer;
