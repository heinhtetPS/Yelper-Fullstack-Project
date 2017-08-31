import { fetchBusinesses } from './business_actions';


export function updateFilter(filter, value) {
  return (dispatch, getState) => {
    dispatch(changeFilter(filter, value));
    return fetchBusinesses(getState().filters)(dispatch);
    // delicious curry!
  };
}
