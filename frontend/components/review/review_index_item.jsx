import React from 'react';
import { Link } from 'react-router-dom';
import { deleteAReview } from '../../actions/review_actions';

const ReviewIndexItem = ({ review, business_id, currentUser_id }) => {

  if(review === null || review === undefined)
  return null;

  const reviewdate = review.created_at.slice(0, 10);
  let thisuser = null;
  if (review.user)
  thisuser = review.user;

  //try to pass dispatch function from parent instead of jury rigging it in here

  // let writelink = "/login";
  // if(business_id)
  //its right here but I can't access it
  let writelink = `/writeareview/${business_id}`;

  let delethisreview = (review) => { dispatch(deleteAReview(review)) };

  //finally worked after hours of debugging:
  //first if is to render sample case: no problem if it renders before props
  //2nd conditional avoids rendering before props are received
  // 3rd one is the real case where props (especially user is needed)
  //final else is to MAKE SURE it doesn't render while also not returning nothing
  const ratingclass = ["", "one-stars-small", "two-stars-small",
  "three-stars-small", "four-stars-small", "five-stars-small", "onehalf-stars-small",
  "twohalf-stars-small", "threehalf-stars-small", "fourhalf-stars-small"];
  let starsrating = 0;
  if (review.rating) {
    starsrating = review.rating;
    if (starsrating === 1.5)
      starsrating = 6;
    if (starsrating === 2.5)
      starsrating = 7;
    if (starsrating === 3.5)
      starsrating = 8;
    if (starsrating === 4.5)
      starsrating = 9;
  }

  //delete button for logged users
  let deletebuttonclass = "hidden-delete"
  if (thisuser && thisuser.id === currentUser_id)
  deletebuttonclass = "show-delete";

  if (review.id === -1) {
    return (
      <div className="review-item">
        <div className="user-sidebar">
          <img src="https://s3-media3.fl.yelpcdn.com/assets/srv0/yelp_styleguide/bf5ff8a79310/assets/img/default_avatars/user_medium_square.png"></img>
        </div>
        <div className="review-right-column">
          <div className="body-head">
            <Link to={writelink}>
              <div className="zero-stars-big"></div>
            </Link>
          </div>
          <Link to={writelink}>{review.body}</Link>
        </div>
      </div>
    )
  } else if (thisuser != null) {
    return (

      <div className="review-item">
        <div className="user-sidebar">
          <img src="https://s3-media3.fl.yelpcdn.com/assets/srv0/yelp_styleguide/bf5ff8a79310/assets/img/default_avatars/user_medium_square.png"></img>
          <p>{thisuser.username}</p>
        </div>
        <div className="review-right-column">
          <div className="body-head">
            <div className={ratingclass[starsrating]}></div>
            <p>{reviewdate}</p>
          </div>
          <p className="review-body">{review.body}</p>
        </div>
        <button className={deletebuttonclass} onClick={deleteAReview(review.id)}>Delete</button>
      </div>
    );
  } else {
    return null;
  }
}

export default ReviewIndexItem;
