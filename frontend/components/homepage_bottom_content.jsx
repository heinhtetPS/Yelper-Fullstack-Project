import React from 'react';
import { Link, Route } from 'react-router-dom';
import CitiesNavContainer from './cities_nav_container';
import FeaturedContainer from './biz/featured_container';
import CategoriesIndexContainer from './categories_index_container';

const HomeBottom = () => {
  return (
    <div className="bottom_main_container">
      <Route exact path="/" component={CitiesNavContainer} />
      <Route exact path="/" component={FeaturedContainer} />
      <Route exact path="/" component={CategoriesIndexContainer} />
    </div>
  );
};



export default HomeBottom;
