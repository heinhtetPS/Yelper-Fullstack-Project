import { merge } from 'lodash';
//Either import merge with no brackets from lodash/merge OR use no brackets and just from lodash

import { RECEIVE_SINGLE_BUSINESS } from '../actions/business_actions';

const ReviewsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {

    case RECEIVE_SINGLE_BUSINESS:
    //damn how do i pass in ID instead of hard code?
      const reviews = action.payload[1].reviews;
      return merge({}, state, reviews);

    default:
        return state;

    //take reviews off business and put them in slice of state
  }
};

export default ReviewsReducer;
