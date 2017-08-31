import { merge } from 'lodash';
//Either import merge with no brackets from lodash/merge OR use no brackets and just from lodash

// import { } from '../actions/business_actions';

const FiltersReducer = (state = {}, action) => {
  Object.freeze(state);
  //replace array of reviews with just array of IDs
  switch (action.type) {

    default:
      return state;
  }
};

export default FiltersReducer;
