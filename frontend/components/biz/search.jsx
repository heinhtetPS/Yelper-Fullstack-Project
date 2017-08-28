import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class Search extends React.Component {

  constructor(props) {
    super(props);
    //do state stuff here
    this.handleSubmit = this.handleSubmit.bind(this);
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
    this.props.history.push('/search');
 }

 render() {
   //make vars to change toggle class when on a differnt page
   let searchcontainer;
   let searchform;
   let searchheader;
   let searchkeyword;
   let searchlocation;
   let searchsubmit;
   let searchsvg;

   if (this.props.match.path === "/") {
     searchcontainer = "search-container-splash";
   } else {
     searchcontainer = "search-container-top";
   }

   console.log(this.props);
   return (
     <div>
       <div className={searchcontainer}>
         <form className="search_form"  onSubmit={this.handleSubmit}>
           <span className="search-header">
             Find
           </span>
           <input className="search-keyword"type="text"
             placeholder="tacos, cheap dinner, Max's"

             />
           <input className="search-location"type="text"
               placeholder="New York, NY"

               />
             <button className="search-submit-home" onSubmit={this.handleSubmit}>
               <span>
                 <svg className="svg-search">
                   <path d="M20.753 19.34l-4.295-4.297A7.46 7.46 0 0 0 18 10.5a7.5 7.5 0 1 0-7.5 7.5 7.46 7.46 0 0 0 4.543-1.542l4.296 4.295a1 1 0 1 0 1.412-1.414zM10.5 16A5.506 5.506 0 0 1 5 10.5C5 7.467 7.467 5 10.5 5S16 7.467 16 10.5 13.533 16 10.5 16z"></path>
                 </svg>
               </span>
             </button>
         </form>
       </div>
     </div>
   );
 }

}

export default Search;
