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
        <h3>{biz.name}</h3>
        <p>{pricecounter.join('')}</p>
      </div>
    </div>
  )
};



export default BizIndexItem;
