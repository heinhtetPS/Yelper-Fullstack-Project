import React from 'react';
import { Link, Route } from 'react-router-dom';
import SearchContainer from './biz/search_container';

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
   let bottomnavclass = this.props.location.pathname === "/" ? "hidden-nav" : "bottom-red-nav";
   let logopos = this.props.location.pathname === "/" ? "putlogohere" : "toplogo";
   let auth_color = this.props.location.pathname === "/" ? "auth-links" : "auth-red";
   let signupcolor = this.props.location.pathname === "/" ? "signupbtn" : "signupRed";
   let logincolor = this.props.location.pathname === "/" ? "loginbtn" : "loginRed";
   let authlinks;

   //check for login & path to show minimalist white buttons for login and signup
   if (!this.props.loggedIn &&
     this.props.location.pathname != "/login" &&
     this.props.location.pathname != "/signup") {
     authlinks = (<div className={auth_color}>
       <Link to="/login" className={logincolor}>Log In</Link>
       <Link to="/signup" className={signupcolor}>Sign Up</Link>
     </div>);
   } else if (this.props.loggedIn) {
        //here's the dropdown button and menu
     authlinks = (<div className={auth_color}>
       <div className="full-button">
         <img className="dropdown-btn"
           onClick={this.togglehidden}
           src="https://s3-media3.fl.yelpcdn.com/assets/srv0/yelp_styleguide/bf5ff8a79310/assets/img/default_avatars/user_medium_square.png"></img>
         <div className="button-right-arrow">
           <svg className="svg-triangle">
             <path d="M7 9L3.5 5h7L7 9z"></path>
           </svg>
         </div>
       </div>
       <div id='hider'className="hidden-dropdown-items">
         <div className="arrow-up"></div>
         <p>{this.props.currentUser.username}</p>
         <button className="post-button"onClick={this.props.logoutUser}>Logout</button>
       </div>
     </div>);
   }

   //actual render happens here
   // Why does it still render sessionform after going to "/"?
   return (
     <nav className={navclass}>
         <Link to="/" className={logopos}>YELPER</Link>
        {authlinks}
        <Route path="/biz" component={SearchContainer} />
        <Route path="/search" component={SearchContainer} />
        <nav className={bottomnavclass}>
          <ul>

          </ul>
        </nav>
     </nav>
   );
 }
}

export default RedNav;
