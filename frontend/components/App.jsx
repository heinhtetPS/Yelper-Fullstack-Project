import React from 'react';
import { Route, Redirect,
  Switch, Link, HashRouter } from 'react-router-dom';

import SessionFormContainer from './session_form_container';
import RedNavContainer from './red_nav_container';
import MainSplashContainer from './main_splash_container';
import SearchContainer from './biz/search_container';
import HomeBottom from './homepage_bottom_content';
import BusinessShowContainer from './biz/business_show_container';
import ResultsContainer from './biz/results_container';


let logopos;
if (location.pathname === "/") {
  logopos = "midlogo";
} else {
  logopos = "toplogo";
}

//this doesn't work, find out why
function returntotop() {
  document.body.scrollTop = 0; // For Chrome, Safari and Opera
  document.documentElement.scrollTop = 0; // For IE and Firefox
}

//PLAN: Maybe I should make a global page container with standardized dimensions
//Here, the structure is messed up because mainsplash renders everwhere despite having the exact condition
const App = () => (
  <div>
    <Route exact path="/" component={MainSplashContainer} />
    <Route path="/biz" onClick={returntotop()}component={BusinessShowContainer} />
        <div className="inside-splash">
          <Route path="/" component={RedNavContainer} />
          <Route path="/login" component={SessionFormContainer} />
          <Route path="/signup" component={SessionFormContainer} />
          <Route exact path="/" component={SearchContainer} />
        </div>
        <Route exact path="/" component={HomeBottom} />
        <Route path ="/search" component={ResultsContainer}/>



    <div className="global-footer">
        <div className="footer-content">
            <div className="footer-column">

            </div>
            <div className="footer-column">

            </div>
            <div className="footer-column">

            </div>
            <div className="footer-column">

            </div>
            <div className="cityscape"></div>
            <small className="final-foot">
              Copyright © 2017 Hein Htet Pyi Soe. This website is intended for academic use only.
            </small>
        </div>
    </div>
  </div>
);
//next we want to get categories boxes


export default App;
