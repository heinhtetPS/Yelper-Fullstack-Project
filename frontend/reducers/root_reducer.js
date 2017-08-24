import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import businessReducer from './business_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  biz: businessReducer
});

export default rootReducer;
