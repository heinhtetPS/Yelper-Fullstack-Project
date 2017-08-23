import React from 'react';
import { Link } from 'react-router-dom';

class RedNav extends React.Component {

  constructor(props) {
    super(props);
  }

 render() {
   let navclass = this.props.location.pathname === "/" ? "invisible_nav" : "classic_red_nav";
   let authlinks;


   if (!this.props.loggedIn && this.props.location.pathname === "/") {
     authlinks = (<div className="auth_links">
       <Link to="/login" id="loginbutton" className="loginbtn">Log In</Link>
       <Link to="/signup" id="signupbutton" className="signupbtn">Sign Up</Link>
     </div>);
   } else if (this.props.loggedIn) {
        //later, change this to dwop down
     authlinks = (<div className="auth_links">
       <button onClick={this.props.logoutUser}>Logout</button>
       <p>Welcome {this.props.currentUser.username}</p>
     </div>);
   }

   //actual render happens here
   return (
     <nav className={navclass}>
        {authlinks}
     </nav>
   );
 }

  //...
}

export default RedNav;
