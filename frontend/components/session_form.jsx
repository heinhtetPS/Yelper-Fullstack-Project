import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);

    //initial state is blank
    if (this.props.location.pathname === "/signup") {
      this.state = {
        username: "",
        email: "",
        password: ""
      };
    } else {
      this.state = {
        username: "",
        password: ""
      };
    }

     this.handleSubmit = this.handleSubmit.bind(this);
  }

  //when people type, change the state text
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
   e.preventDefault();
   const user = Object.assign({}, this.state);
   this.props.processForm(user);
   //we also want to clear form and redirect to root
 }

 whichform() {
   //1st one returns Signup form, else login form
   if (this.props.location.pathname === "/signup") {
     return(
       <div className="sessionForm_master">
         <form onSubmit={this.handleSubmit}>
           <h2 className="Redh2">Sign Up for Yelp</h2> <br />
           <p>Connect with great local businesses</p> <br />
           <p>By signing up, you agree to Yelp’s Terms of Service and Privacy Policy.</p>
           <input type ="text"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.update('username')}
             /> <br />
             <input type ="text"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.update('email')}
               /> <br />
               <input type ="text"
                      placeholder="Secret Password"
                      value={this.state.password}
                      onChange={this.update('password')}
                 /> <br />
           <input type="submit" value="Sign up" /> <br />
           <p className="tinytext">Already on Yelp?</p>
           <Link to="/login" className="tinytext">Log In</Link>
         </form>
         <img className="right-side-house" src="https://s3-media4.fl.yelpcdn.com/assets/2/www/img/1e82406ff345/signup/signup_illustration.png"></img>
       </div>
     );
   } else {
     //this is the login form 
     return (
       <div className="sessionForm_master">
         <form onSubmit={this.handleSubmit}>
           <h2>Log In to Yelp</h2> <br />
           <p>New to Yelp?</p> <Link to="/signup">Sign up!</Link> <br />
           <p>By signing up, you agree to Yelp’s Terms of Service and Privacy Policy.</p>
             <input type ="text"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={this.update('username')}
               /> <br />
               <input type ="text"
                      placeholder="password"
                      value={this.state.password}
                      onChange={this.update('password')}
                 /> <br />
           <input type="submit" value="Log In!" /> <br />
           <p className="tinytext">New to Yelp?</p>
           <Link to="/signup" className="tinytext">Sign up</Link>
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
