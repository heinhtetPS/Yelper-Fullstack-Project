import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import BusinessReducer from './business_reducer';
import ReviewsReducer from './reviews_reducer';
import FiltersReducer from './filters_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  biz: BusinessReducer,
  // reviews: ReviewsReducer
  filters: FiltersReducer,
});

export default rootReducer;
