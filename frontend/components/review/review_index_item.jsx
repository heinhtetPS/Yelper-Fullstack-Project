import React from 'react';
import { Link } from 'react-router-dom';

const ReviewIndexItem = ({ review }) => {

  const reviewdate = review.created_at.slice(0, 10);
  if (review.id === 9999) {
    return (
      <div className="review-item">
        <div className="user-sidebar">
          <img src="https://s3-media3.fl.yelpcdn.com/assets/srv0/yelp_styleguide/bf5ff8a79310/assets/img/default_avatars/user_medium_square.png"></img>
        </div>
        <div className="review-right-column">
          <div className="body-head">
            <Link to="/">
              <div className="stars-img"></div>
            </Link>
          </div>
          <Link to="/">{review.body}</Link>
        </div>
      </div>
    )
  } else {
    return (

      <div className="review-item">
        <div className="user-sidebar">
          <img src="https://s3-media3.fl.yelpcdn.com/assets/srv0/yelp_styleguide/bf5ff8a79310/assets/img/default_avatars/user_medium_square.png"></img>
          <p>User: {review.author_id}</p>
        </div>
        <div className="review-right-column">
          <div className="body-head">
            <div className="stars-smaller"></div>
            <p>{reviewdate}</p>
          </div>
          <p className="review-body">{review.body}</p>
        </div>
      </div>
    );
  }
}

export default ReviewIndexItem;
