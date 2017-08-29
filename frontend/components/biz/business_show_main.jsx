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
    //Set up empty vars to fill once the info comes in...
    let currentbiz = null;
    let reviewnumber = null;
    let sample = null;
    let price_describe = "";
    const pricecounter = [];
    const biz_categories = [];

    //if async info has been retrieved....
    if (this.props.biz[0]) {
      currentbiz = this.props.biz[0];

      //set price $$$s & text
      for (let i = 0; i < currentbiz.price; i++) {
          pricecounter.push('$');
      }
      if (currentbiz.price === 1)
      price_describe = "under $10";
      if (currentbiz.price === 2)
      price_describe = "$11-$30";
      if (currentbiz.price === 3)
      price_describe = "$31-$60";
      if (currentbiz.price === 4)
      price_describe = "above $61";

      //set categories
      currentbiz.categories.forEach(el =>
      biz_categories.push(el.name));

      //set # of reviews
      reviewnumber = currentbiz.reviews ? currentbiz.reviews.length : 0;

      //generate sample review
      sample = {
        id: -1,
        author_id: 9999,
        rating: 0,
        body: `Start your review of ${currentbiz.name}`,
        created_at: "2017-08-29T13:44:03.245Z"
      };
    }

    //extra prevention for error triggering
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
            <h1 className="Redh2">Recommended reviews for {currentbiz.name}</h1>
            <ReviewIndexItem key={sample.id} review={sample} />
            {currentbiz.reviews.map(
              review => <ReviewIndexItem
              key={review.id}
              review={review}     />)}
          </div>

          <div className="right-info-column">
              <div className="info-header-box">
                <h2>Today: (Hours for the current day)</h2>
                <Link to="/">Menu
                  <svg className="svg-link">
                    <path d="M14 15H4c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3v1H4v10h10v-3h1v3c0 .55-.45 1-1 1zm-5.12-4.465L7.463 9.12l3.83-3.827L9 3h6v6l-2.293-2.293-3.828 3.828z"></path>
                  </svg>
                </Link>
                <p>$$$$ Price Range: {price_describe}</p>
              </div>
              <div className="more-info">
                <h2>More Business Info</h2>
                <p>Delivery: {currentbiz.delivery.toString()}</p>
                <p>Take-out: {currentbiz.take_out.toString()}</p>
                <p>Accepts Credit Cards: {currentbiz.accepts_credit_cards.toString()}</p>
                <p>Wi-Fi: {currentbiz.wifi.toString()}</p>
              </div>
          </div>

        </div>

      </div>
    );

  }
}

export default BusinessShowMain;
