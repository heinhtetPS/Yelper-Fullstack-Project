import React from 'react';
import { Route, Redirect,
  Switch, Link, HashRouter } from 'react-router-dom';

import SessionFormContainer from './session_form_container';
import RedNavContainer from './red_nav_container';
import MainSplashContainer from './main_splash_container';
import SearchContainer from './biz/search_container';
import CitiesNavContainer from './cities_nav_container';
import FeaturedContainer from './biz/featured_container';


let logopos;
if (location.pathname === "/") {
  logopos = "midlogo";
} else {
  logopos = "toplogo";
}

//PLAN to remove main logo out of the the main app thing and put them inside other comps
const App = () => (
  <div>
    <Route exact path="/" component={MainSplashContainer} />
      <div className="inside-splash">
        <Route path="/" component={RedNavContainer} />
        <Route path="/login" component={SessionFormContainer} />
        <Route path="/signup" component={SessionFormContainer} />
        <Route exact path="/" component={SearchContainer} />

      </div>
      <div className="bottom_main_container">
        <Route exact path="/" component={CitiesNavContainer} />
        <Route exact path="/" component={FeaturedContainer} />
      </div>
  </div>
);

export default App;
