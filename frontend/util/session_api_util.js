//These methods make AJAX requests from frontend
//to API (rails backend database) and retrieves
//user and session info

//add key of user so that params in controller picks it up correctly
export const createNewUser = newUser => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: {user: newUser}
  })
);

export const loginUser = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user }
  })
);

export const logoutUser = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);
