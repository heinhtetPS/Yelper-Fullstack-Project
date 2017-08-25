import React from 'react';
import { Link } from 'react-router-dom';

const BizIndexItem = ({ biz }) => (
  <div className="biz_box">
    <div className="biz_photo_box">
      <Link to="/api/biz/1">
        <img src="https://s3-media3.fl.yelpcdn.com/bphoto/_mSOrFPac21VHKv59h38jA/l.jpg"></img>
      </Link>
    </div>
    <div className="biz_info_box">
      <h3>0</h3>
    </div>
  </div>
);

export default BizIndexItem;
