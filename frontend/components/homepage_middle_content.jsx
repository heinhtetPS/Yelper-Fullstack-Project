import React from 'react';
import { Link, Route } from 'react-router-dom';
import SessionFormContainer from './session_form_container';
import SearchContainer from './biz/search_container';

const Homemiddle = () => {
  return (
    <div className="inside-splash">
      <Route path="/login" component={SessionFormContainer} />
      <Route path="/signup" component={SessionFormContainer} />
      <Route exact path="/" component={SearchContainer} />
    </div>
  );
};



export default Homemiddle;
