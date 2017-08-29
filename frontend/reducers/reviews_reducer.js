import { merge } from 'lodash';
//Either import merge with no brackets from lodash/merge OR use no brackets and just from lodash

import { RECEIVE_REVIEWS, RECEIVE_ERRORS, RECEIVE_ERRORS } from '../actions/review_actions';

const ReviewsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {

    case RECEIVE_REVIEWS:
      return merge({}, state, action.reviews);
    case RECEIVE_A_REVIEW:
      const rv = action.payload;
      return merge({}, state.biz, biz);
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, state, { errors: errors } );
    default:
      return state;
  }
};

export default ReviewsReducer;
