import * as reviewUtil from '../util/reviews_util';

export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RECEIVE_SINGLE_REVIEW = 'RECEIVE_SINGLE_REVIEW,';
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';


export const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
});

export const receiveSingleReview = payload => ({
  type: RECEIVE_SINGLE_REVIEW,
  payload,
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

//dispatch is an arg for the returning function
//doesn't show up in logger because it is being invoked with dispatch as arg
export const createNewReview = review => dispatch => {
  return reviewUtil.createNewReview(review).then(review => (
    dispatch(receiveSingleReview(review))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ));
};

export const editReview = review => dispatch => {
  return reviewUtil.createNewReview(review).then(review => (
    dispatch(receiveSingleReview(review))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ));
};
//add filters here before dispatch
export const fetchReviews = () => dispatch => {
  return reviewUtil.fetchAllReviews().then(reviews => (
    dispatch(receiveReviews(reviews))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ));

};

export const fetchAReview = id => dispatch => {
  return businessUtil.fetchSingleReview(id).then(review => (
    dispatch(receiveReviewSingleReview(review))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ));

};

///////////////////////////maybe it should be like this instead

// export const requestSteps = todoId => dispatch => (
//   StepAPIUtil.fetchSteps(todoId)
//   .then(steps => dispatch(receiveSteps(steps)))
// );
//
// export const createStep = (todoId, step) => dispatch => (
//   StepAPIUtil.createStep(todoId, step)
//   .then(step => dispatch(receiveStep(step)))
// );
