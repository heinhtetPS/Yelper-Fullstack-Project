import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import BizIndexItem from '../biz/biz_index_item';
import SmallerReviewItem from './smaller_review_item';

class ReviewForm extends React.Component {

  constructor(props) {
    super(props);

    //initial state is blank
      this.state = {
        rating: 1,
        body: "",
        business_id: this.props.location.pathname.slice(-1)
      };
     this.handleSubmit = this.handleSubmit.bind(this);

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

  // renderErrors() {
  //   return (
  //     <ul id="hider"className="errorbox-hidden">
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
    $('#hider').toggleClass('errorbox-hidden errorbox');
  }

  handleSubmit(e) {
   e.preventDefault();
   const newreview = Object.assign({}, this.state);
   this.props.processForm({review: newreview});
   this.toggleerrors();
   this.props.history.push(`/biz/${this.props.location.pathname.slice(-1)}`);
  //  this.clearform();
 }

 whichform() {

   //1st one returns create form, else edit form
   if (this.props.formType === "writeareview") {
     return(
       <div className="review-box">


         <form onSubmit={this.handleSubmit}>
           <div className="input-container">
             <h2>Your review</h2>
             <div className="bordered-container">
               <div className="stars-interactive">
                 <input type="radio" name="rating" value="1" onClick={this.update('rating')}/>
                <input type="radio" name="rating" value="2" onClick={this.update('rating')}/>
                <input type="radio" name="rating" value="3" onClick={this.update('rating')}/>
                <input type="radio" name="rating" value="4" onClick={this.update('rating')}/>
                <input type="radio" name="rating" value="5" onClick={this.update('rating')}/>
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
             <h2>Your review</h2>
             <div className="bordered-container">
               <div className="stars-interactive">
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
   console.log(this.props);
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

  //...
}

export default ReviewForm;
