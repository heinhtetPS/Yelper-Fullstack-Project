import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import BizIndexItem from '../biz/biz_index_item';

class ReviewForm extends React.Component {

  constructor(props) {
    super(props);

    //initial state is blank
    // if (this.props.location.pathname === "/create") {
    //   this.state = {
    //     username: "",
    //     email: "",
    //     password: ""
    //   };
    // } else {
    //   this.state = {
    //     username: "",
    //     password: ""
    //   };
    // }

     this.handleSubmit = this.handleSubmit.bind(this);

  }

  //This thing redirects to login if not logged in
  // componentWillReceiveProps(nextProps) {
  //   if (!nextProps.loggedIn) {
  //     this.props.history.push('/login');
  //   }
  // }

  //when people type, change the state text
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  renderErrors() {
    return (
      <ul id="hider"className="errorbox-hidden">
        {this.props.errors.map((error, idx) => (
          <li key={`error-${idx}`}>{error}</li>
        ))}
      </ul>
    );
  }
  //this doesn't work anyway
  // clearform() {
  //   if (this.props.location.pathname === "/signup") {
  //     this.state = {
  //       username: "",
  //       email: "",
  //       password: ""
  //     };
  //   } else {
  //     this.state = {
  //       username: "",
  //       password: ""
  //     };
  //   }
  // }

  toggleerrors() {
    $('#hider').toggleClass('errorbox-hidden errorbox');
  }

  handleSubmit(e) {
   e.preventDefault();
   const review = Object.assign({}, this.state);
   this.props.processForm(user);
   this.toggleerrors();
   this.clearform();
 }

 whichform() {
   //1st one returns create form, else edit form
   if (this.props.location.pathname === "/writeareview") {
     return(
       <div className="reviewForm-master">
         {this.renderErrors()}
         <h2 className="Redh2">Write a Review</h2> <br />
         <div className="bizz-reminder">
         </div>
         <form onSubmit={this.handleSubmit}>
           <div className="review-box">
             <h2>Your review</h2>
             <div className="bordered-container">
               <div className="stars-interactive">

               </div>
               <textarea className="body-field"
                 placeholder="Your review helps us learn about great local businesses.
                 Please don't review this business if you received a freebie for writing this or if you're connected in any way to the owner or employees.">

               </textarea>
               <input type="submit" value="Post Review" /> <br />

             </div>

           </div>

         </form>

       </div>
     );
   } else {
     //this is the edit form
     return (
       <div className="sessionForm_master">
         {this.renderErrors()}
         <div className="left-side-form">
           <form onSubmit={this.handleSubmit}>
             <h2 className="Redh2">Log In to Yelp</h2> <br />
             <p>New to Yelp?</p> <Link to="/signup">Sign up!</Link> <br />
             <p>By signing up, you agree to Yelp’s Terms of Service and Privacy Policy.</p>
             <input type ="text"
               placeholder="Username"
               value={this.state.username}
               onChange={this.update('username')}
               /> <br />
             <input type ="password"
               placeholder="password"
               value={this.state.password}
               onChange={this.update('password')}
               /> <br />
             <input type="submit" value="Log In!" /> <br />
             <p className="tinytext">New to Yelp?</p>
             <Link to="/signup" className="tinytext">Sign up</Link>
           </form>
           <button onClick={this.submitDemo}>Demo Login</button>
         </div>
         <div className="right-side-house">
           <img src="https://s3-media4.fl.yelpcdn.com/assets/2/www/img/1e82406ff345/signup/signup_illustration.png"></img>
         </div>
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

export default ReviewForm;
