import { merge } from 'lodash';
//Either import merge with no brackets from lodash/merge OR use no brackets and just from lodash

import { UPDATE_FILTER } from '../actions/filter_actions';

const defaultFilters = Object.freeze({
  bounds: {},
  categories: {}
});

const FiltersReducer = (state = defaultFilters, action) => {
  Object.freeze(state);
  //replace array of reviews with just array of IDs
  switch (action.type) {

    case UPDATE_FILTER:
      const newFilter = {
        [action.filter]: action.value
      };
      return merge({}, state, newFilter);

    default:
      return state;
  }
};

export default FiltersReducer;
