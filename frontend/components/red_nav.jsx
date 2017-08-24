import React from 'react';
import { Link } from 'react-router-dom';

class RedNav extends React.Component {

  constructor(props) {
    super(props);
  }

  togglehidden() {
    $('#hider').toggleClass('hidden-dropdown-items unhidden-dropdown-items');
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
       <img className="dropdown-btn"
          onClick={this.togglehidden}
         src="https://s3-media3.fl.yelpcdn.com/assets/srv0/yelp_styleguide/bf5ff8a79310/assets/img/default_avatars/user_medium_square.png"></img>
       <div id='hider'className="hidden-dropdown-items">
         <p>{this.props.currentUser.username}</p>
         <button onClick={this.props.logoutUser}>Logout</button>
       </div>
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
