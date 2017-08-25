import React from 'react';
import { Link } from 'react-router-dom';

class Featured extends React.Component {

  constructor(props) {
    super(props);

    // this.state = {
    //   Leftbox: {},
    //   Middlebox: {},
    //   Rightbox: {}
    // };
  }

  componentDidMount() {
    this.props.fetchBusinesses();
    // this.setState({Leftbox: this.props.fetchABusiness(1)});
    // this.setState({Middlebox: this.props.fetchABusiness(2)});
    // this.setState({Rightbox: this.props.fetchABusiness(1)});
    //because these are async, we need to set conditionals for rendering
    //instead fetch all businesses
  }

  render() {

    //i want to put each businesses's full info inside lbox, mbox and rbox
    //and then distribute this info into the HTML when it has loaded
    //simply index through the array received and set conditionals to not render if array < 3
    // if (this.props.biz.length >=2)
    // console.log(this.props.biz)
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
