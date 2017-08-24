import { merge } from 'lodash';
//Either import merge with no brackets from lodash/merge OR use no brackets and just from lodash

import { RECEIVE_CURRENT_BUSINESS, RECEIVE_ERRORS, createNewBusiness } from '../actions/business_actions';

const businessReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_BUSINESS:
      return merge({}, state, action.business);
    case RECEIVE_SINGLE_BUSINESS:
      const biz = action.payload.business;
      //UNcomment once you have created reviews
      // biz.review_ids = action.payload.reviews.map(review => review.id);
      return merge({}, state, { [biz.id]: biz });
    default:
      return state;
  }
};

export default BusinessReducer;
