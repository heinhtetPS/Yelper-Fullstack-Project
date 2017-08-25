import * as businessUtil from '../util/business_api_util';

export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RECEIVE_SINGLE_BUSINESS = 'RECEIVE_SINGLE_BUSINESS,';
export const RECEIVE_BUSINESSES = 'RECEIVE_BUSINESSES';

export const receiveBusinesses = businesses => ({
  type: RECEIVE_BUSINESSES,
  businesses
});

export const receiveSingleBusiness = payload => ({
  type: RECEIVE_SINGLE_BUSINESS,
  payload,
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

//dispatch is an arg for the returning function
//doesn't show up in logger because it is being invoked with dispatch as arg
export const createNewBusiness = business => dispatch => {
  return businessUtil.createNewBusiness(business).then(business => (
    dispatch(receiveCurrentBusiness(business))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ));
};

export const fetchBusinesses = filters => dispatch => {
  return businessUtil.fetchAllBusinesses(filters).then(businesses => (
    dispatch(receiveBusinesses(businesses))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ));

};

export const fetchABusiness = id => dispatch => {
  return businessUtil.fetchSingleBusiness(id).then(business => (
    dispatch(receiveSingleBusiness(business))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ));

};

//null to remove currentuser
