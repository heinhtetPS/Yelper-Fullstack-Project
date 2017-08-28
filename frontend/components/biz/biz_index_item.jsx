import React from 'react';
import { Link } from 'react-router-dom';

const BizIndexItem = ({ biz }) => {
  const pricecounter = [];
  for (let i = 0; i < biz.price; i++) {
      pricecounter.push('$');
  }
  //need to get stars info
  //need to get # of review (this.props.reviews.length)
  //need to get categories array (this.props.categories.join(','))
  //need to get location (maybe slice after ,s)



  const biz_categories = [];
  biz.categories.forEach(el =>
  biz_categories.push(el.name));
  let bizurl = "/biz/" + biz.id
  console.log(bizurl);
  return (
    <div className="biz_box">
      <div className="biz_photo_box">
        <Link to={bizurl}>
          <img src="https://s3-media3.fl.yelpcdn.com/bphoto/_mSOrFPac21VHKv59h38jA/l.jpg"></img>
        </Link>
      </div>
      <div className="biz_info_box">
        <h3 className="small-header">{biz.name}</h3>
        <div className="stars-smaller"></div>
        <p className="reviews-count-smaller">xx reviews</p>
        <p className="price-counter">{pricecounter.join('')}</p>
        <Link to="/"className="categories-links" >{biz_categories.join(", ")}</Link>
      </div>
    </div>
  )
};



export default BizIndexItem;
