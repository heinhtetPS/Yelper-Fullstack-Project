//These methods make AJAX requests from frontend
//to API (rails backend database) and retrieves
//business info

//add key of user so that params in controller picks it up correctly
export const createNewBusiness = newBusiness => (
  $.ajax({
    method: 'POST',
    url: '/api/biz',
    data: {business: newBusiness}
  })
);

export const updateABusiness = updatedBusiness => (
  $.ajax({
    method: 'POST',
    url: `/api/biz/${updatedBusiness.id}`,
    data: { updatedBusiness }
  })
);


export const fetchAllBusinesses = () => (
  $.ajax({
    method: 'GET',
    url: 'api/biz'
  })
);

export const fetchSingleBusiness = id => (
  $.ajax({
    method: 'GET',
    url: `api/biz/${id}`
  })
);
