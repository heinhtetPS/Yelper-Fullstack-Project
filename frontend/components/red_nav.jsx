import React from 'react';
import { Link } from 'react-router-dom';

class RedNav extends React.Component {

  constructor(props) {
    super(props);
  }
  //this toggles the hidden class of the dropdown
  togglehidden() {
    $('#hider').toggleClass('hidden-dropdown-items unhidden-dropdown-items');
  }

 render() {
   //ternary declaration, either we're on homepage for transparent nav or classic red on all others
   let navclass = this.props.location.pathname === "/" ? "invisible_nav" : "classic_red_nav";
   let logopos = this.props.location.pathname === "/" ? "midlogo" : "toplogo";
   let authlinks;

   //check for login & path to show minimalist white buttons for login and signup
   if (!this.props.loggedIn && this.props.location.pathname === "/") {
     authlinks = (<div className="auth_links">
       <Link to="/login" id="loginbutton" className="loginbtn">Log In</Link>
       <Link to="/signup" id="signupbutton" className="signupbtn">Sign Up</Link>
     </div>);
   } else if (this.props.loggedIn) {
        //here's the dropdown button and menu
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
   //for our logo, make this an h1 with an A link inside
   //put css tag on the h1 and put bg image url on it
   //Let the size be 160 x 80
   //display block on the a link
   return (
     <nav className={navclass}>
         <Link to="/" className={logopos}>YELPER</Link>
        {authlinks}

     </nav>
   );
 }

  //...
}

export default RedNav;
