export const createNewReview = newReview => (
  $.ajax({
    method: 'POST',
    url: '/api/reviews',
    data: newReview
  })
);

export const updateAReview = updatedReview => (
  $.ajax({
    method: 'POST',
    url: `/api/reviews/${updatedReview.id}`,
    data: { updatedReview }
  })
);


export const fetchAllReviews = () => (
  $.ajax({
    method: 'GET',
    url: 'api/reviews'
  })
);

export const fetchSingleReview = id => (
  $.ajax({
    method: 'GET',
    url: `api/reviews/${id}`
  })
);

export const deleteAReview = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/reviews/${id}`,
  })
);
