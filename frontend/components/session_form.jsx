import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleSubmit(e) {
   e.preventDefault();
   const user = Object.assign({}, this.state);
   //need to define this
  //  this.props.processForm(user);
 }

 whichform() {
   if (this.props.location.pathname === "/signup") {
     return(
       <div>
         <form>
           <h2>Sign Up for Yelp</h2> <br />
           <p>Connect with great local businesses</p> <br />
           <p>By signing up, you agree to Yelp’s Terms of Service and Privacy Policy.</p>
           <input type ="text" placeholder="Username"></input> <br />
           <input type ="text" placeholder="Email"></input> <br />
           <input type ="text" placeholder="Password"></input> <br />
           <button>Sign up</button> <br />
           <p className="tinytext">Already on Yelp?</p>
           <Link to="/login">Log In</Link>
         </form>
         <img className="right-side-house" src="https://s3-media4.fl.yelpcdn.com/assets/2/www/img/1e82406ff345/signup/signup_illustration.png"></img>
       </div>
     );
   } else {
     return (
       <div>
         <form>
           <h2>Log In to Yelp</h2> <br />
           <p>New to Yelp?</p> <Link to="/signup">Sign up!</Link> <br />
           <p>By signing up, you agree to Yelp’s Terms of Service and Privacy Policy.</p>
           <input type ="text" placeholder="Username"></input> <br />
           <input type ="text" placeholder="Password"></input> <br />
           <button>Log In</button> <br />
           <p className="tinytext">New to Yelp?</p>
           <Link to="/signup">Sign up!</Link>
         </form>
         <img className="right-side-house" src="https://s3-media4.fl.yelpcdn.com/assets/2/www/img/1e82406ff345/signup/signup_illustration.png"></img>
       </div>
     );
   }
 }

 render() {
   return (
     <div>
       {this.whichform()}
     </div>
   );
 }

  //...
}

export default SessionForm;
