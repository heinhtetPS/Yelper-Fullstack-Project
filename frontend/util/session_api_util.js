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
//had an error where controller didn't accept the data
//had to put it inside obj
export const loginUser = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user }
  })
);

//I had to create a custom destroy view for this to update correctly
//it just has {} in it
export const logoutUser = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);
