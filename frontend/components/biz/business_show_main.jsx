import React from 'react';
import { Link } from 'react-router-dom';
import BizIndexItem from './biz_index_item';
import ReviewIndexItem from '../review/review_index_item';
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
    let reviewnumber = null;
    let sample = null;
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

      //set # of reviews
      //without retrieving reviews, it is undefined
      reviewnumber = currentbiz.review_ids ? currentbiz.review_ids.length : 0;

      //generate sample review
      sample = {
        id: 9999,
        author_id: 9999,
        rating: 0,
        body: `Start your review of ${currentbiz.name}`,
        created_at: "2017-08-29T13:44:03.245Z"
      };
    }

    if (!currentbiz)
    return null;



    return (
      <div className="biz-page-container">
        <div className="biz-headers">
            <div className="biz-header-left">
              <h1 className="biz-name">{currentbiz.name}</h1>
              <div className="stars-img"></div>
              <p className="reviews-count">{reviewnumber} reviews</p>
              <p className="price-counter">{pricecounter.join('')}</p>
              <Link to="/"className="categories-links" >{biz_categories.join(", ")}</Link>
            </div>
            <div className="biz-header-right">

            </div>

        </div>
        <div className="biz-content-container">
            <div className="map-card-show">
              <Bizmap />
              <div className="address-info-show">
                <h3>Located at:</h3>
                <p>{currentbiz.address}</p>
                <p>{currentbiz.website}</p>
              </div>
            </div>
          <div className="show-pics-container">

          </div>

        </div>

        <div className="biz-bottom-content">
          <div className="reviews-main-container">
            <ReviewIndexItem key={sample.id} review={sample} />
            {currentbiz.reviews.map(
              review => <ReviewIndexItem
              key={review.id}
              review={review}     />)}
          </div>

          <div className="right-info-column">
              <div className="info-header-box">

              </div>
          </div>

        </div>


      </div>
    );
  }
}

export default BusinessShowMain;
