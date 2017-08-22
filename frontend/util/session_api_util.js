//These methods make AJAX requests from frontend
//to API (rails backend database) and retrieves
//user and session info

export const createNewUser = (newUser) => (
  $.ajax({
    method: 'POST',
    url: 'api/user',
    data: { newUser }
  })
);

export const loginUser = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: user
  })
);

export const logoutUser = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);
