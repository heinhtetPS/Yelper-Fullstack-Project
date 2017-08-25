import { merge } from 'lodash';
//Either import merge with no brackets from lodash/merge OR use no brackets and just from lodash

import { RECEIVE_BUSINESSES, RECEIVE_SINGLE_BUSINESS, RECEIVE_ERRORS, createNewBusiness } from '../actions/business_actions';

const BusinessReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_BUSINESSES:
      return merge({}, state, action.business);
    case RECEIVE_SINGLE_BUSINESS:
      const biz = action.payload.business;
      //UNcomment once you have created reviews
      // biz.review_ids = action.payload.reviews.map(review => review.id);
      return merge({}, state, { [biz.id]: biz });
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, state, { errors: errors } );
    default:
      return state;
  }
};

export default BusinessReducer;
