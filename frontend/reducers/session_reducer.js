import { merge } from 'lodash';
//Either import merge with no brackets from lodash/merge OR use no brackets and just from lodash

import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';

const nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = nullUser, action) => {

  Object.freeze(state);

  switch (action.type) {
    //here I had to fix a mistake where I combined state with currentUser,
    //this resulted in state never changing
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, nullUser, { currentUser });

//this is wrong, it doesn't merge correctly, need to merge errors into the errors array that's already in state
//fixed by adding nulluser and putting errors in obj
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, nullUser, { errors: errors } );

    default:
      return state;
  }

};

export default SessionReducer;
