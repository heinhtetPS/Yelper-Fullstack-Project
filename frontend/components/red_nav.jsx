import React from 'react';
import { Link } from 'react-router-dom';

class RedNav extends React.Component {

  constructor(props) {
    super(props);
  }

 render() {
   return (
     //toggle class here to make invis nav effect
     <nav className="classic_red_nav">

        <div className="auth_links">
          <Link to="/login" id="loginbutton">Log In</Link>
          <Link to="/signup" id="signupbutton">Sign Up</Link>
        </div>
     </nav>
   );
 }

  //...
}

export default RedNav;
