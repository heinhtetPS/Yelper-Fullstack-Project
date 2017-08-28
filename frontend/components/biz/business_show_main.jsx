import React from 'react';
import { Link } from 'react-router-dom';
import BizIndexItem from './biz_index_item';
import Bizmap from '../map'; 

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
    const pricecounter = [];
    const biz_categories = [];

    //if async info has been retrieved....
    if (this.props.biz[0]) {
      currentbiz = this.props.biz[0];

      //set price $$$s
      for (let i = 0; i < currentbiz.price; i++) {
          pricecounter.push('$');
      }

      //set categories
      currentbiz.categories.forEach(el =>
      biz_categories.push(el.name));
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
              <Link to="/"className="categories-links" >{biz_categories.join(", ")}</Link>
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
