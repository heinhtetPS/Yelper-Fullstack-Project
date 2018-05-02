import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class BusinessNewForm extends React.Component {

  constructor(props) {
    super(props);

      this.state = {
        name: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        price: "",
        categories: [],
        website: "",
        pictures: [],
        delivery: false,
        take_out: false,
        accepts_credit_cards: false,
        owner_id: 1
      };
     this.handleSubmit = this.handleSubmit.bind(this);
     this.update = this.update.bind(this);
     this.updateBool = this.updateBool.bind(this);
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
    // console.log(this.state);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  updateBool(attr) {
    return e => this.setState({
      [attr]: e.currentTarget.checked
    });
  }

  renderErrors() {
    this.props.errors.forEach( (error) => {
      alert(error);
    })
    // console.log("errors rendering");
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
    //find where the URLS are returned
    //put as strings in an array
    let pics = [];
    let thumbs = [];
    if (results.length > 0) {
      alert("Upload Success")
      results.forEach( (upload) => {
        pics.push(upload.secure_url);
        thumbs.push(upload.thumbnail_url);
      })
      this.setState(prevState => {
        return {pictures: prevState.pictures.concat(pics)}
      });

    } else {
      alert("No urls detected!")
      // console.log(results);
    }
  }

  createThumbnails(urls) {
    //for each url in urls, put a pic in the pic holder
  }

  handleSubmit(e) {
   e.preventDefault();
   let newbiz = Object.assign({}, this.state);
   newbiz = this.composeAddress(newbiz);

   // console.log(this.state);
   //check here if there are problems

   //things to add: lng, lat,
   //it has to belong to a category...but you can't assign it on creation...(do this in createNewBusiness)

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
                     <label className="labels">Price</label><br />
                     <span className="help-text">1 is the cheapest, 4 is the most expensive.</span>
                       <input type="text"
                         placeholder="2"
                         name="price"
                         value={this.state.price}
                         onChange={this.update('price')}
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
                     <input type="checkbox"
                            name="accepts_credit_cards"
                            checked={this.state.accepts_credit_cards}
                            onChange={this.updateBool('accepts_credit_cards')}></input>
                          <label>Credit/Debit      </label>
                     <input type="checkbox"
                           name="delivery"
                           checked={this.state.delivery}
                           onChange={this.updateBool('delivery')}></input>
                     <label>Does Delivery  </label>
                       <input type="checkbox"
                             name="take_out"
                             checked={this.state.take_out}
                             onChange={this.updateBool('take_out')}></input>
                     <label>Does Takeout   </label><br />
                     <label className="labels">Picture(s)</label><br />
                      <button onClick={
                                    (e) => {
                                      e.preventDefault();
                                    cloudinary.openUploadWidget({ cloud_name: 'dooqsrgbq', upload_preset: 'wpbbj7sv'},
                                    (error, result) => {
                                      this.handleUploads(result) }, false)}
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
