import React from 'react';
import { Route, Redirect,
  Switch, Link, HashRouter } from 'react-router-dom';

import { ProtectedRoute, AuthRoute } from '../util/route_util';
import RedNavContainer from './red_nav_container';
import MainSplashContainer from './main_splash_container';
import Homemiddle from './homepage_middle_content';
import HomeBottom from './homepage_bottom_content';
import BusinessShowContainer from './biz/business_show_container';
import ResultsContainer from './biz/results_container';
import SessionFormContainer from './session_form_container';
import ReviewFormContainer from './review/review_form_container';
import BusinessNewContainer from './biz/business_new_container';


let logopos;
if (location.pathname === "/") {
  logopos = "midlogo";
} else {
  logopos = "toplogo";
}

//put this in the link instead
function returntotop() {
  document.body.scrollTop = 0; // For Chrome, Safari and Opera
  document.documentElement.scrollTop = 0; // For IE and Firefox
}

//why does it still render sessionform after coming back to "/" after errors?
const App = () => (

  <div className="global-container">
    <Route exact path="/" component={MainSplashContainer} />
    <Route path="/" component={RedNavContainer} />
    <Route path="/biz/:id" component={BusinessShowContainer} />
    <Route exact path="/" component={Homemiddle} />
    <Route exact path="/" component={HomeBottom} />
    <Route path="/search" component={ResultsContainer} />
    <AuthRoute exact path="/login" component={SessionFormContainer} />
    <AuthRoute exact path="/signup" component={SessionFormContainer} />
    <ProtectedRoute path="/writeareview/:id" component={ReviewFormContainer} />
    <ProtectedRoute path="/addbusiness" component={BusinessNewContainer} />


    <div className="global-footer">
        <div className="footer-content">
            <div className="footer-column">

            </div>
            <div className="footer-column">
              <h1>About</h1>
                <ul>
                  <li><a href="http://heinhtetps.info/">About me (Portfolio)</a></li>
                  <li><a href="https://www.linkedin.com/in/heinhtetps/">Visit my LinkedIn</a></li>
                  <li><a href="https://github.com/heinhtetPS">Visit my Github</a></li>
                  <li><a href="https://docs.google.com/document/d/1j4HoSYk9OcmpYWhjg-tFaYapDt87OjPT3Lgx_ldRv0A/edit?usp=sharing">See my Resume</a></li>
                </ul>
            </div>
            <div className="footer-column">
              <h1>Discover</h1>
              <ul>
                <li><Link to="/search?Restaurant">Restaurants</Link></li>
                <li><Link to="/search?Nightlife">Nightlife</Link></li>
                <li><Link to="/search?Shopping">Shopping</Link></li>

              </ul>
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
