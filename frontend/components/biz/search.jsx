import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class Search extends React.Component {

  constructor(props) {
    super(props);
    //do state stuff here
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
   e.preventDefault();
  //  const user = Object.assign({}, this.state);
  //  this.props.processForm(user);
  //  this.toggleerrors();
  //  this.clearform();
 }

 render() {
   return (
     <div>
       <div className="search_container">
         <form className="search_form">
           <input type ="text"
             placeholder="tacos, cheap dinner, Max's"

             />
             <input type ="text"
               placeholder="New York, NY"

               />
         </form>
       </div>
     </div>
   );
 }

}

export default Search;
