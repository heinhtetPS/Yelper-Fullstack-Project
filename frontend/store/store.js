import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
  // must use 'require' (import only allowed at top of file)
  const logger = require('redux-logger');
  middlewares.push(logger.logger);
  // console.log(middlewares);
  //had to change to logger.logger because logger by itself is an obj not function
}



const configureStore = (preloadedState = {}) => {

//add the redux devtools if you run into trouble
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middlewares)
  );

};

export default configureStore;
