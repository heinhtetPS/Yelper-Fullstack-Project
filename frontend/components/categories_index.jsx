import React from 'react';
import { Link } from 'react-router-dom';
import CategoriesIndexItem from './categories_index_item';

class CategoriesIndex extends React.Component {

  constructor(props) {
    super(props);

  }

  render () {

    return (
      <div className="categories-main">
        <h3 className="Redh3">Browse Business By Category</h3>
        <div className="cat-boxes-container">
          <div className="cat-box">
            <img src="https://s3-media1.fl.yelpcdn.com/assets/srv0/homepage/80b92cd513f0/assets/img/categories/72x72_restaurants.png"></img>
            <h3>Restaurants</h3>
          </div>
          <div className="cat-box">
            <img src="https://s3-media2.fl.yelpcdn.com/assets/srv0/homepage/ad1f85392c04/assets/img/categories/72x72_shopping.png"></img>
            <h3>Shopping</h3>
          </div>
          <div className="cat-box">
            <img src="https://s3-media1.fl.yelpcdn.com/assets/srv0/homepage/4ee31d03d5b2/assets/img/categories/72x72_nightlife.png"></img>
            <h3>Nightlife</h3>
          </div>
          <div className="cat-box">
            <img src="https://s3-media1.fl.yelpcdn.com/assets/srv0/homepage/dda5bcbe7e6c/assets/img/categories/72x72_beauty.png"></img>
            <h3>Beauty</h3>
          </div>
          <div className="cat-box">
            <img src="https://s3-media2.fl.yelpcdn.com/assets/srv0/homepage/59b42d70fa94/assets/img/categories/72x72_automotive.png"></img>
            <h3>Auto</h3>
          </div>
          <div className="cat-box">
              <img src="https://s3-media2.fl.yelpcdn.com/assets/srv0/homepage/52d0e24aea08/assets/img/categories/72x72_home_services.png"></img>
              <h3>Other</h3>
          </div>
        </div>
      </div>
    );
  }

}

export default CategoriesIndex;
