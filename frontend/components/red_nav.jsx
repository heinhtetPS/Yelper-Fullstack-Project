import React from 'react';
import { Link } from 'react-router-dom';

class RedNav extends React.Component {

  constructor(props) {
    super(props);
  }

 render() {
   let navclass;
   if (this.props.location.pathname === "/") {
     navclass = "invisible_nav";
   } else {
     navclass = "classic_red_nav";
   }
   return (
     //toggle class here to make invis nav effect
     <nav className={navclass}>

        <div className="auth_links">
          <Link to="/login" id="loginbutton" className="loginbtn">Log In</Link>
          <Link to="/signup" id="signupbutton" className="signupbtn">Sign Up</Link>
        </div>
     </nav>
   );
 }

  //...
}

export default RedNav;
