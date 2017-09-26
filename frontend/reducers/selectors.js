import values from 'lodash/values';

export const selectAllbiz = biz => values(biz);

export const selectThreeRandomBiz = biz => {
  
};


export const asArray = ({ filters }) => {
  if (filters === null || filters === undefined)
  return [];
  return Object.keys(filters).map(key => filters[key]);
};
