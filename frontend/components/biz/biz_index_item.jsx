import React from 'react';
import { Link } from 'react-router-dom';

const BizIndexItem = ({ biz }) => {
  const pricecounter = [];
  for (let i = 0; i < biz.price; i++) {
      pricecounter.push('$');
  }
  //need to make an onClick that returns you to top

  let num_reviews = biz.reviews.length;
  const biz_categories = [];
  biz.categories.forEach(el =>
  biz_categories.push(el.name));
  let bizurl = "/biz/" + biz.id

  return (
    <div className="biz_box">
      <div className="biz_photo_box">
        <Link to={bizurl}>
          <img src="https://s3-media3.fl.yelpcdn.com/bphoto/_mSOrFPac21VHKv59h38jA/l.jpg"></img>
        </Link>
      </div>
      <div className="biz_info_box">
        <Link to={bizurl} className="small-header">{biz.name}</Link>
        <div className="stars-smaller"></div>
        <p className="reviews-count-smaller">{num_reviews} reviews</p>
        <p className="price-counter-smaller">{pricecounter.join('')}</p>
        <Link to="/"className="categories-links" >{biz_categories.join(", ")}</Link>
        <p>{biz.address}</p>
        <p className="fire-line">
          <svg className="svg-fire">
            <path d="M11.508 3.743c1.173 2.43-.465 2.27-.696 3.88C10.082 2.758 5.947 1.5 5.947 1.5c2.045 2.697-1.9 4.784-3.63 8.33-1.47 3.016 2.533 5.44 4.67 6.67-2.15-2.993-.563-5.02 1.612-6.793-.81 2.448.5 2.934 1.043 3.944.71-.31 1.028-1.3 1.1-1.79.954 1.31 1.465 2.97-.248 4.64 8.302-3.77 5.977-9.743 1.007-12.752z"></path>
          </svg>
        Opened 2 weeks ago</p>

      </div>
    </div>
  )
};



export default BizIndexItem;
