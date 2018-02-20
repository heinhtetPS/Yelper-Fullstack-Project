import React from 'react';
import { Link } from 'react-router-dom';
import BizIndexItem from './biz_index_item';
import ReviewIndexItem from '../review/review_index_item';
import Bizmap from '../map';
import { ProtectedRoute } from '../../util/route_util';
import { deleteAReview } from '../../actions/review_actions';

class BusinessShowMain extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //this finds the business based on the last number in
    //url. Will not work for >10 businesses
    this.props.fetchABusiness(
      this.props.match.params.id
    );
    window.scrollTo(0, 0);
  }

  componentWillReceiveProps(newProps) {
  //   if (this.props.biz[0].id !== nextProps.biz[0].id) {
  //    this.props.fetchABusiness(nextProps.biz[0].id);
  //  }
  }


  render() {
    //THIS PATTERN SUCEEDS, COPY THIS PATTERN ELSEWHERE
    //Set up empty vars to fill once the info comes in...
    let currentbiz = null;
    let reviewnumber = null;
    let sample = null;
    let price_describe = "";
    let writelink = "/";
    let categoriesLinks = [];
    let average_rating = null;
    const ratings = [];
    const ratingclass = ["", "one-stars-big", "two-stars-big",
    "three-stars-big", "four-stars-big", "five-stars-big", "onehalf-stars-big",
    "twohalf-stars-big", "threehalf-stars-big", "fourhalf-stars-big"];
    const pricecounter = [];
    const biz_categories = [];
    let loggedUserId = null;
    let bizpics = [];
    //if async info has been retrieved....
    if (this.props.currentUser)
    loggedUserId = this.props.currentUser.id;


    if (this.props.biz) {
      currentbiz = this.props.biz;

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

      //set writeareview link
      writelink = `/writeareview/${currentbiz.id}`;

      //set categories links
      categoriesLinks = currentbiz.categories.map( cat => {
        return ['/search?'.concat(cat.name), cat.name.concat(', ')]
      });

      //get ratings from all reviews and set average
      currentbiz.reviews.forEach(review => ratings.push(review.rating));
      average_rating = ratings.reduce((a,b) => a + b, 0) / ratings.length;
      average_rating = Math.round(average_rating*2)/2;
      if (average_rating === 1.5)
      average_rating = 6;
      if (average_rating === 2.5)
      average_rating = 7;
      if (average_rating === 3.5)
      average_rating = 8;
      if (average_rating === 4.5)
      average_rating = 9;
      //we will generate stars based on that average

      //pictures
      bizpics = currentbiz.pictures;

    }//end of props biz check

    //extra prevention for error triggering
    if (!currentbiz)
    return null;

    return (
      <div className="biz-page-container">
        <div className="grey-bg"></div>
        <div className="biz-headers">
            <div className="biz-header-left">
              <h1 className="biz-name">{currentbiz.name}</h1>
              <div className={ratingclass[average_rating]}></div>
              <p className="reviews-count">{reviewnumber} reviews</p>
              <p className="price-counter">{pricecounter.join('')}</p>
                  {categoriesLinks.map(
                    cate => <Link to={cate[0]} className="categories-links">{cate[1]}</Link>
                )}
            </div>
            <div className="biz-header-right">
              <div className="review-button">
                <Link to={writelink} className="link-styling">
                  <svg className="svg-star">
                    <path d="M12 1.5l2.61 6.727 6.89.53-5.278 4.688 1.65 7.055L12 16.67 6.13 20.5l1.648-7.055L2.5 8.757l6.89-.53L12 1.5z"></path>
                  </svg>
                  Write a Review
                </Link>
              </div>
            </div>

        </div>
        <div className="biz-content-container">
            <div className="map-card-show">
              <Bizmap
                businesses={currentbiz}
                biz={currentbiz}
                bizID={currentbiz.id}
                singleBiz={true}
                fetchABusiness={this.props.fetchABusiness}/>
              <div className="address-info-show">
                <h3>Located at:</h3>
                <p>{currentbiz.address}</p>
                <p>{currentbiz.website}</p>
              </div>
            </div>
          <div className="show-pics-container">
              <img id="showpics" className="leftpic" src={bizpics[1]}></img>
              <img id="showpics" className="middlepic" src={bizpics[0]}></img>
              <img id="showpics" className="rightpic" src={bizpics[2]}></img>
          </div>

        </div>

        <div className="biz-bottom-content">
          <div className="reviews-main-container">
            <h1 className="Redh2">Recommended reviews for {currentbiz.name}</h1>
            <ReviewIndexItem key={sample.id} review={sample} business_id={currentbiz.id} />
            {currentbiz.reviews.map(
              review => <ReviewIndexItem
              key={review.id}
              review={review}
              currentUser_id={loggedUserId}
              business_id={currentbiz.id}
              fetchBusiness={this.props.fetchABusiness}
              deleteAReview={deleteAReview(review.id)}     />)}
          </div>

          <div className="right-info-column">
              <div className="info-header-box">
                <h2 className="Redh2">Business Hours:</h2>
                  <table className="hours-table">
                    <tbody>
                      <tr>
                        <th scope="row">Mon</th>
                        <td>
                          <span class="nowrap">6:30 pm</span> - <span class="nowrap">1:00 am</span>
                        </td>
                        <td class="extra">
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Tue</th>
                          <td>
                            Closed
                          </td>
                          <td class="extra">
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Wed</th>
                            <td>
                              <span class="nowrap">6:30 pm</span> - <span class="nowrap">1:00 am</span>
                            </td>
                            <td class="extra">
                            </td>
                          </tr>
                            <tr>
                              <th scope="row">Thu</th>
                              <td>
                                <span class="nowrap">6:30 pm</span> - <span class="nowrap">1:00 am</span>
                              </td>
                              <td class="extra">
                              </td>
                            </tr>
                            <tr>
                          <th scope="row">Fri</th>
                          <td>
                            <span class="nowrap">6:30 pm</span> - <span class="nowrap">1:00 am</span>
                          </td>
                          <td class="extra">
                          </td>
                        </tr>
                            <tr>
                              <th scope="row">Sat</th>
                              <td>
                                <span class="nowrap">6:30 pm</span> - <span class="nowrap">1:00 am</span>
                              </td>
                              <td class="extra">
                              </td>
                            </tr>
                          <tr>
                            <th scope="row">Sun</th>
                            <td>
                              <span class="nowrap">6:30 pm</span> - <span class="nowrap">1:00 am</span>
                            </td>
                            <td class="extra">
                            </td>
                          </tr>
                    </tbody>
                </table>
                <h2 className="Redh2">Menu:</h2>
                <Link to="/">View the full Menu
                  <svg className="svg-link">
                    <path d="M14 15H4c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3v1H4v10h10v-3h1v3c0 .55-.45 1-1 1zm-5.12-4.465L7.463 9.12l3.83-3.827L9 3h6v6l-2.293-2.293-3.828 3.828z"></path>
                  </svg>
                </Link>
                <p>{pricecounter.join('')} Price Range: {price_describe}</p>
              </div>
              <div className="more-info">
                <h2 className="Redh2">More Business Info</h2>
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
