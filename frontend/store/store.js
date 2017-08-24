import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => {

//add the redux devtools if you run into trouble
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, logger)
  );

};

export default configureStore;
