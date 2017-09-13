import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class BusinessNewForm extends React.Component {

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
  //     <ul id="errorhider"className="errorbox-hidden">
  //       {this.props.errors.map((error, idx) => (
  //         <li key={`error-${idx}`}>{error}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  // toggleerrors() {
  //   $('#errorhider').toggleClass('errorbox-hidden errorbox');
  // }

  handleSubmit(e) {
   e.preventDefault();
   const newbiz = Object.assign({}, this.state);
   //check here if there are problems
   this.props.createNewBusiness(newbiz);
   this.props.history.push("/");
 }


 render() {

     return (
       <div className="reviewForm-master">
         <div className="left-column">
           <h2 className="Redh2">Add your business</h2> <br />
           <p>Add information about your business below. Your business page will not appear in search results until this information has been verified and approved by our moderators. Once it is approved, you'll receive an email with instructions on how to claim your business page.</p>
           <form>
             <label>Business Name</label><br />
             <input type="text"
               placeholder="Mel's Diner"
               className="add-inputs"></input><br />
               <label>Address 1</label><br />
               <input type="text"
                 placeholder="123 Main st"
                 className="add-inputs"></input><br />
                 <label>City</label><br />
                 <input type="text"
                   placeholder="Brooklyn"
                   className="add-inputs"></input><br />
                   <label>State</label><br />
                   <input type="text"
                     placeholder="NY"
                     className="add-inputs"></input><br />
                     <label>ZIP</label><br />
                     <input type="text"
                       placeholder="11232"
                       className="add-inputs"></input><br />
                   <label>Categories</label><br />
                   <input type="text"
                     placeholder="Restaurant, Shopping"
                     className="add-inputs"></input><br />
                     <label>Web Address</label><br />
                     <input type="text"
                       placeholder="www.google.com"
                       className="add-inputs"></input><br />
                       <label>Picture</label><br />
                      <button>Upload here</button><br />
                      <input type="submit" value="Add Business" className="post-button"/>



           </form>
         </div>
         <div className="right-column">
           <div className="biz-house"></div>
         </div>


       </div>
     );

 }

  //...
}

export default BusinessNewForm;
