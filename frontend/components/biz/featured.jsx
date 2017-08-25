import React from 'react';
import { Link } from 'react-router-dom';

class Featured extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="featured_container">
        <h2>Hot & New Businesses</h2>
        <div className="bizzes_container">
          <div className="biz_box">
            <div className="biz_photo_box">
              <Link to="/api/biz/1">
                <img src="https://s3-media3.fl.yelpcdn.com/bphoto/_mSOrFPac21VHKv59h38jA/l.jpg"></img>
              </Link>

            </div>
            <div className="biz_info_box">
              <h3>Business Name</h3>
            </div>
          </div>
          <div className="biz_box">
            <div className="biz_photo_box">
              <a>
                <img src="https://s3-media3.fl.yelpcdn.com/bphoto/_mSOrFPac21VHKv59h38jA/l.jpg"></img>
              </a>
            </div>
            <div className="biz_info_box">
              <h3>Business Name2</h3>
            </div>
          </div>
          <div className="biz_box">
            <div className="biz_photo_box">
              <a>
                <img src="https://s3-media3.fl.yelpcdn.com/bphoto/_mSOrFPac21VHKv59h38jA/l.jpg"></img>
              </a>
            </div>
            <div className="biz_info_box">
              <h3>Business Name3</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Featured;
