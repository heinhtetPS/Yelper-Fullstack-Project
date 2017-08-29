import { merge } from 'lodash';
//Either import merge with no brackets from lodash/merge OR use no brackets and just from lodash

import { RECEIVE_BUSINESSES, RECEIVE_SINGLE_BUSINESS, RECEIVE_ERRORS } from '../actions/business_actions';

const BusinessReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {

    case RECEIVE_BUSINESSES:
      return merge({}, state, action.businesses);
    case RECEIVE_SINGLE_BUSINESS:
    //not sure about thids
      const biz = action.payload;
      // biz.review_ids = action.payload.reviews.map(review => review.id);
      return merge({}, state.biz, biz);
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, state, { errors: errors } );
    default:
      return state;
  }
};

export default BusinessReducer;
