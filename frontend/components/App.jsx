import React from 'react';
import { Route, Redirect,
  Switch, Link, HashRouter } from 'react-router-dom';

import SessionFormContainer from './session_form_container';
import RedNavContainer from './red_nav_container';
import MainSplashContainer from './main_splash_container';

const App = () => (
  <div>
    <h1 className="toplogo">YERPLER</h1>
      <Route path="/" component={RedNavContainer} />
      <Route exact path="/" component={MainSplashContainer} />
      <Route path="/login" component={SessionFormContainer} />
      <Route path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
