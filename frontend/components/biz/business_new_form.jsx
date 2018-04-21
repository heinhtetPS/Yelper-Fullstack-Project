import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class BusinessNewForm extends React.Component {

  constructor(props) {
    super(props);

    //initial state is blank
      this.state = {
        name: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        categories: [],
        website: "",
        pictures: []
      };
     this.handleSubmit = this.handleSubmit.bind(this);
     this.update = this.update.bind(this);
     this.renderErrors = this.renderErrors.bind(this);
     this.composeAddress = this.composeAddress.bind(this);
     this.handleUploads = this.handleUploads.bind(this);
  }


  //This thing redirects to login if not logged in
  componentWillReceiveProps(nextProps) {
    if (!nextProps.loggedIn) {
      this.props.history.push('/login');
    }
    if (nextProps.errors.length > 0) {
      this.renderErrors();
    }
  }

  //when people type, change the state text
  //categories needs its own update
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  renderErrors() {
    this.props.errors.forEach( (error) => {
      alert(error);
    })
    console.log("errors rendering");
  }

  composeAddress(bizObject) {
    //remove city, state, zip, while also putting them in temphold
    let temphold = [];
    temphold.push(bizObject.city);
    delete bizObject.city;
    temphold.push(bizObject.state);
    delete bizObject.state;
    temphold.push(bizObject.zip);
    delete bizObject.zip;
    //compose address using above values
    bizObject.address += ", " + temphold[0] + ", " + temphold[1] + ", " + temphold[2];
    return bizObject;
  }

  handleUploads(results) {

  }

  handleSubmit(e) {
   e.preventDefault();
   let newbiz = Object.assign({}, this.state);
   newbiz = this.composeAddress(newbiz);
   console.log(newbiz);
   //check here if there are problems

   // this.props.createNewBusiness(newbiz);
 }

 render() {

     return (
       <div className="reviewForm-master">
         <div className="left-column">
           <h2 className="Redh2">Add your business</h2>
           <p className='smaller'>Add information about your business below and submit to persist to our database.</p>
           <form onSubmit={this.handleSubmit}>
             <label className="labels">Business Name</label><br />
             <input type="text"
               placeholder="Mel's Diner"
               name="name"
               value={this.state.name}
               onChange={this.update('name')}
               className="add-inputs"></input><br />
               <label className="labels">Address</label><br />
               <input type="text"
                 placeholder="123 Main st"
                 name="address"
                 value={this.state.address}
                 onChange={this.update('address')}
                 className="add-inputs"></input><br />
                 <label className="labels">City</label><br />
                 <input type="text"
                   placeholder="Brooklyn"
                   name="city"
                   value={this.state.city}
                   onChange={this.update('city')}
                   className="add-inputs"></input><br />
                   <label className="labels">State</label><br />
                   <input type="text"
                     placeholder="NY"
                     name="state"
                     value={this.state.state}
                     onChange={this.update('state')}
                     className="add-inputs"></input><br />
                     <label className="labels">ZIP</label><br />
                     <input type="text"
                       placeholder="11232"
                       name="zip"
                       value={this.state.zip}
                       onChange={this.update('zip')}
                       className="add-inputs"></input><br />
                   <label className="labels">Categories</label><br />
                   <span className="help-text">Select up to 3 categories, seperated by commas.</span>
                   <input type="text"
                     placeholder="Restaurant, Shopping"
                     name="categories"
                     value={this.state.categories}
                     onChange={this.update('categories')}
                     className="add-inputs"></input><br />
                     <label className="labels">Web Address</label><br />
                     <input type="text"
                       placeholder="www.yelp.com"
                       name="website"
                       value={this.state.website}
                       onChange={this.update('website')}
                       className="add-inputs"></input><br />
                     <label className="labels">Picture(s)</label><br />
                      <button onClick={
                                    () => {
                                    cloudinary.openUploadWidget({ cloud_name: 'dooqsrgbq', upload_preset: 'wpbbj7sv'},
                                    (error, result) => {
                                      console.log(error, result) }, false)}
                                      }
                              value={this.state.pictures}
                              onChange={this.handleUploads}>Upload here</button><br /><br />
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
