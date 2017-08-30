import React from 'react';
import { Link } from 'react-router-dom';

const SmallerReviewItem = ({ review }) => {

  if(review === null || review === undefined)
  return null;

  const reviewdate = review.created_at.slice(0, 10);
  let thisuser = null;
  if (review.user)
  thisuser = review.user

  //finally worked after hours of debugging:
  //first if is to render sample case: no problem if it renders before props
  //2nd conditional avoids rendering before props are received
  // 3rd one is the real case where props (especially user is needed)
  //final else is to MAKE SURE it doesn't render while also not returning nothing

  if (thisuser != null) {
    return (

      <div className="review-item-small">
        <div className="user-sidebar-small">
          <img src="https://s3-media3.fl.yelpcdn.com/assets/srv0/yelp_styleguide/bf5ff8a79310/assets/img/default_avatars/user_medium_square.png"></img>
          <p>{thisuser.username}</p>
        </div>
        <div className="review-right-column-small">
          <div className="body-head-small">
            <div className="stars-smaller"></div>
            <p>{reviewdate}</p>
          </div>
          <p className="review-body-small">{review.body}</p>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default SmallerReviewItem;
