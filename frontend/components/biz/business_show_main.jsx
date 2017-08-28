import React from 'react';
import { Link } from 'react-router-dom';
import BizIndexItem from './biz_index_item';

class BusinessShowMain extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //this finds the business based on the last number in
    //url. Will not work for >10 businesses
    this.props.fetchABusiness(
      this.props.location.pathname.slice(-1)
    );
  }


  render() {
    //THIS PATTERN SUCEEDS, COPY THIS PATTERN ELSEWHERE
    let currentbiz = null;
    let pricecounter = [];
    if (this.props.biz[0]) {
      currentbiz = this.props.biz[0];
      for (let i = 0; i < currentbiz.price; i++) {
          pricecounter.push('$');
      }
    }

    if (!currentbiz)
    return null;

    return (
      <div className="biz-page-container">
        <div className="biz-headers">
            <div className="biz-header-left">
              <h1 className="biz-name">{currentbiz.name}</h1>
              <div className="stars-img"></div>
              <p className="reviews-count">xx reviews</p>
              <p className="price-counter">{pricecounter.join('')}</p>
              <Link to="/"className="categories-links" >Categories here</Link>
            </div>
            <div className="biz-header-right">

            </div>

        </div>
        <div className="biz-content-container">
          <div className="show-map-container">

          </div>
          <div className="show-pics-container">

          </div>

        </div>

        <div className="biz-bottom-content">
          <div className="reviews-main-container">

          </div>

          <div className="right-info-column">

          </div>

        </div>


      </div>
    );
  }
}

export default BusinessShowMain;
