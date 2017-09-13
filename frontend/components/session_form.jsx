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
     this.submitDemo = this.submitDemo.bind(this);
  }

  //This thing redirects to root immediately ASK TA
  //still have a problem that it doesn't show user name even after redirect
  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }

    if (nextProps.errors.length > 0) {
      this.toggleerrors()
    }
  }

  //when people type, change the state text
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  renderErrors() {
      return (
        <ul id="errorhider"className="errorbox-hidden">
          {this.props.errors.map((error, idx) => (
            <li key={`error-${idx}`}>{error}</li>
          ))}
        </ul>
      );
  }

  clearform() {
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
  }



  toggleerrors() {
      $('#errorhider').toggleClass('errorbox-hidden errorbox');
  }

  handleSubmit(e) {
   e.preventDefault();
   const user = Object.assign({}, this.state);
   this.props.processForm(user);
  //  debugger
   if (this.props.errors.length > 0) {
     this.toggleerrors();
   }
   this.clearform();
 }

 submitDemo(e) {
   e.preventDefault();
   this.props.processForm({username: 'demo_user', password: 'password'});
 }

 whichform() {
  //  //1st one returns Signup form, else login form
  //  if (this.props.location.pathname === "/signup") {
  //    return(
  //      <div className="sessionForm_master">
   //
  //        <div className="left-side-form">
   //
  //          <form onSubmit={this.handleSubmit}>
  //            <h2 className="Redh2">Sign Up for Yelper</h2> <br />
  //            <p>Connect with great local businesses</p> <br />
  //            <p>By signing up, you agree to Yelper’s Terms of Service and Privacy Policy.</p>
  //              {this.renderErrors()}
  //            <input type ="text"
  //              className="session-inputs"
  //              placeholder="Username"
  //              value={this.state.username}
  //              onChange={this.update('username')}
  //              /> <br />
  //            <input type ="text"
  //              className="session-inputs"
  //              placeholder="Email"
  //              value={this.state.email}
  //              onChange={this.update('email')}
  //              /> <br />
  //            <input type ="password"
  //              className="session-inputs"
  //              placeholder="Password"
  //              value={this.state.password}
  //              onChange={this.update('password')}
  //              /> <br />
  //            <input type="submit" className="session-submit"value="Sign up" /> <br />
  //            <p className="tinytext">Already on Yelper?</p>
  //            <Link to="/login" className="tinytext">Log In</Link>
  //          </form>
  //        </div>
  //        <div className="right-side-house">
  //          <img src="https://s3-media4.fl.yelpcdn.com/assets/2/www/img/1e82406ff345/signup/signup_illustration.png"></img>
  //        </div>
  //      </div>
  //    );
  //  } else if (this.props.location.pathname === "/login"){
  //    //this is the login form
  //    return (
  //      <div className="sessionForm_master">
   //
  //        <div className="left-side-form">
  //          <form onSubmit={this.handleSubmit}>
  //            <h2 className="Redh2">Log In to Yelper</h2> <br />
  //            <p>New to Yelper?</p> <Link to="/signup">Sign up!</Link> <br />
  //            <p>By signing up, you agree to Yelper’s Terms of Service and Privacy Policy.</p>
  //                   {this.renderErrors()}
  //            <input type ="text"
  //              className="session-inputs"
  //              placeholder="Username"
  //              value={this.state.username}
  //              onChange={this.update('username')}
  //              /> <br />
  //            <input type ="password"
  //              className="session-inputs"
  //              placeholder="Password"
  //              value={this.state.password}
  //              onChange={this.update('password')}
  //              /> <br />
  //            <input type="submit" className="session-submit"value="Log In" /> <br />
  //              <button onClick={this.submitDemo}>Demo Login</button>
   //
  //            <p className="tinytext">New to Yelper?</p>
  //            <Link to="/signup" className="tinytext">Sign up</Link>
  //          </form>
  //        </div>
  //        <div className="right-side-house">
  //          <img src="https://s3-media4.fl.yelpcdn.com/assets/2/www/img/1e82406ff345/signup/signup_illustration.png"></img>
  //        </div>
  //      </div>
  //    );
  //  } else {
  //    return null;
  //  }
 }

 render() {
   //1st one returns Signup form, else login form
   if (this.props.location.pathname === "/signup") {
     return(
       <div className="sessionForm_master">

         <div className="left-side-form">

           <form onSubmit={this.handleSubmit}>
             <h2 className="Redh2">Sign Up for Yelper</h2> <br />
             <p>Connect with great local businesses</p>
             <p>By signing up, you agree to Yelper’s Terms of Service and Privacy Policy.</p>
               {this.renderErrors()}
             <input type ="text"
               className="session-inputs"
               placeholder="Username"
               value={this.state.username}
               onChange={this.update('username')}
               /> <br />
             <input type ="text"
               className="session-inputs"
               placeholder="Email"
               value={this.state.email}
               onChange={this.update('email')}
               /> <br />
             <input type ="password"
               className="session-inputs"
               placeholder="Password"
               value={this.state.password}
               onChange={this.update('password')}
               /> <br />
             <input type="submit" className="session-submit"value="Sign up" /> <br />
             <p className="tinytext">Already on Yelper?</p>
             <Link to="/login" className="tinytext">Log In</Link>
           </form>
         </div>
         <div className="right-side-house">
           <img src="https://s3-media4.fl.yelpcdn.com/assets/2/www/img/1e82406ff345/signup/signup_illustration.png"></img>
         </div>
       </div>
     );
   } else if (this.props.location.pathname === "/login"){
     //this is the login form
     return (
       <div className="sessionForm_master">

         <div className="left-side-form">
           <form onSubmit={this.handleSubmit}>
             <h2 className="Redh2">Log In to Yelper</h2> <br />
             <p>New to Yelper?</p> <Link to="/signup">Sign up!</Link> <br />
             <p>By signing up, you agree to Yelper’s Terms of Service and Privacy Policy.</p>
                    {this.renderErrors()}
             <input type ="text"
               className="session-inputs"
               placeholder="Username"
               value={this.state.username}
               onChange={this.update('username')}
               /> <br />
             <input type ="password"
               className="session-inputs"
               placeholder="Password"
               value={this.state.password}
               onChange={this.update('password')}
               /> <br />
             <input type="submit" className="session-submit"value="Log In" /> <br />
               <button onClick={this.submitDemo}>Demo Login</button>

             <p className="tinytext">New to Yelper?</p>
             <Link to="/signup" className="tinytext">Sign up</Link>
           </form>
         </div>
         <div className="right-side-house">
           <img src="https://s3-media4.fl.yelpcdn.com/assets/2/www/img/1e82406ff345/signup/signup_illustration.png"></img>
         </div>
       </div>
     );
   } else {
     return null;
   }
 }

  //...
}

export default SessionForm;
