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
           <h2 className="Redh2">Add your business</h2>
           <p className='smaller'>Add information about your business below and submit to persist to our database.</p>
           <form>
             <label className="labels">Business Name</label><br />
             <input type="text"
               placeholder="Mel's Diner"
               className="add-inputs"></input><br />
               <label className="labels">Address</label><br />
               <input type="text"
                 placeholder="123 Main st"
                 className="add-inputs"></input><br />
                 <label className="labels">City</label><br />
                 <input type="text"
                   placeholder="Brooklyn"
                   className="add-inputs"></input><br />
                   <label className="labels">State</label><br />
                   <input type="text"
                     placeholder="NY"
                     className="add-inputs"></input><br />
                     <label className="labels">ZIP</label><br />
                     <input type="text"
                       placeholder="11232"
                       className="add-inputs"></input><br />
                   <label className="labels">Categories</label><br />
                   <span className="help-text">Select up to 3 categories. The more specific the better.</span>
                   <input type="text"
                     placeholder="Restaurant, Shopping"
                     className="add-inputs"></input><br />
                     <label className="labels">Web Address</label><br />
                     <input type="text"
                       placeholder="www.google.com"
                       className="add-inputs"></input><br />
                     <label className="labels">Picture(s)</label><br />
                      <button>Upload here</button><br /><br />
                      <input type="submit" value="Add New Business" className="new-submit"/>

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
