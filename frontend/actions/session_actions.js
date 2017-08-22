import * as sessionUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const createNewUser = user => dispatch => {
  return sessionUtil.createNewUser(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ));
};

export const loginUser = user => dispatch => {
  return sessionUtil.loginUser(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ));
};

export const logoutUser = () => dispatch => {
  return sessionUtil.logoutUser().then(user => (
    dispatch(receiveCurrentUser(null))
  ));
};
//null to remove currentuser
