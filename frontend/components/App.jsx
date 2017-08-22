import React from 'react';
import { Route, Redirect,
  Switch, Link, HashRouter } from 'react-router-dom';

import SessionFormContainer from './session_form_container';
import RedNavContainer from './red_nav_container';

const App = () => (
  <div>
    <h1 className="toplogo">YERPLER</h1>
      <Route exact path="/" component={RedNavContainer} />
      <Route path="/login" component={SessionFormContainer} />
      <Route path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
