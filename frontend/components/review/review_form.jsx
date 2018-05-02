import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import BizIndexItem from '../biz/biz_index_item';
import SmallerReviewItem from './smaller_review_item';

class ReviewForm extends React.Component {

  constructor(props) {
    super(props);

    //initial state is blank
      this.state = {
        rating: 0,
        body: "",
        business_id: this.props.location.pathname.slice(-1)
      };
     this.handleSubmit = this.handleSubmit.bind(this);
     this.handleOptionChange = this.handleOptionChange.bind(this);
     this.changeStars = this.changeStars.bind(this);
  }

  componentDidMount() {
    this.props.fetchABusiness(
      this.props.location.pathname.slice(-1)
    );
  }

  //This thing redirects to login if not logged in
  componentWillReceiveProps(nextProps) {
    if (!nextProps.loggedIn) {
      this.props.history.push('/login');
    }
  }

  //when people type, change the state text
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  //change state to get different stars pics for rating
  handleOptionChange(changeEvent) {
  this.setState({
    rating: changeEvent.target.value
  });
  // console.log(this.state);
}

//sets the classname for stars component
changeStars() {

  switch(this.state.rating) {
    case '0':
    return "stars-interactive";
    break;

    case '1':
    return "one-stars-big";
    break;

    case '2':
    return "two-stars-big";
    break;

    case '3':
    return "three-stars-big";
    break;

    case '4':
    return "four-stars-big";
    break;

    case '5':
    return "five-stars-big";
    break;

    default:
    return "stars-interactive";
    break;
  }
}

  // renderErrors() {
  //   return (
  //     <ul id="errorhider"className="errorbox-hidden">
  //       {this.props.errors.map((error, idx) => (
  //         <li key={`error-${idx}`}>{error}</li>
  //       ))}
  //     </ul>
  //   );
  // }
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
    $('#errorhider').toggleClass('errorbox-hidden errorbox');
  }

  //generic submit
  handleSubmit(e) {
   e.preventDefault();
   const newreview = Object.assign({}, this.state);
   this.props.processForm({review: newreview});
   this.toggleerrors();
   this.props.history.push(`/biz/${this.props.location.pathname.slice(-1)}`);
  //  this.clearform();
 }

 whichform() {

   //changes stars image with radio options
   let starschoice = this.changeStars();

   //1st one returns create form, else edit form

   if (this.props.formType === "writeareview") {
     return(
       <div className="review-box">
         <form onSubmit={this.handleSubmit}>
           <div className="input-container">
             <h2>Your review:</h2>
             <div className="bordered-container">
               <div className={starschoice}>
                 <input type="radio"
                   name="rating"
                   value="1"
                   onChange={this.handleOptionChange}
                   className="invis-radio"
                   checked={this.state.rating===1}/>
                <input type="radio"
                  name="rating"
                  value="2"
                  onChange={this.handleOptionChange}
                  className="invis-radio"
                  checked={this.state.rating===2}/>
                <input type="radio"
                  name="rating"
                  value="3"
                  onChange={this.handleOptionChange}
                  className="invis-radio"
                  checked={this.state.rating===3}/>
                <input type="radio"
                  name="rating"
                  value="4"
                  onChange={this.handleOptionChange}
                  className="invis-radio"
                  checked={this.state.rating===4}/>
                <input type="radio"
                  name="rating"
                  value="5"
                  onChange={this.handleOptionChange}
                  className="invis-radio"
                  checked={this.state.rating===5}/>
               </div>
               <label>Select your rating</label>
               <textarea className="body-field"
                 placeholder="Your review helps us learn about great local businesses.
                 Please don't review this business if you received a freebie for writing this or if you're connected in any way to the owner or employees."
                 onChange={this.update('body')}>
               </textarea>
               <input type="submit" value="Post Review" className="post-button"/>
               <small>* You can always edit or remove reviews later</small>
             </div>
           </div>
         </form>
       </div>
     );
   } else {
     //this is the edit form
     return(
       <div className="review-box">

         <form onSubmit={this.handleSubmit}>
           <div className="input-container">
             <h2>Your review:</h2>
             <div className="bordered-container">
               <div className={starschoice}>
                 <input type="radio" name="rating" value="1"/>
                <input type="radio" name="rating" value="2"/>
                <input type="radio" name="rating" value="3"/>
                <input type="radio" name="rating" value="4"/>
                <input type="radio" name="rating" value="5"/>
               </div>
               <h2>Select your rating</h2>
               <textarea className="body-field"
                 placeholder="The stuff you wrote before...">

               </textarea>
               <input type="submit" value="Edit Review" className="post-button"/>
               <small>* You can always edit or remove reviews later</small>
             </div>
           </div>
         </form>
       </div>
     );
   }
 }

 render() {
   let currentbiz = null;

   if (this.props.biz[0]) {
     currentbiz = this.props.biz[0];

     return (
       <div className="reviewForm-master">
         <h2 className="Redh2">Write a Review</h2> <br />
         <div className="bizz-reminder">
           <BizIndexItem key={currentbiz.id}
             biz={currentbiz}/>
         </div>
         <div className="other-reviews">
           <h2>Other reviews for {currentbiz.name}</h2>
           {currentbiz.reviews.map(
             review => <SmallerReviewItem
             key={review.id}
             review={review}     />)}
         </div>
         {this.whichform()}
       </div>
     );
   } else {
     return null;
   }

 }

}

export default ReviewForm;
