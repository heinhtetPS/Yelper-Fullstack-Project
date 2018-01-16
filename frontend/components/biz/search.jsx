import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: "",
      bounds: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  //made 2 changes to categories here and it didn't change the query
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
   e.preventDefault();
   const currentfilters = Object.assign({}, this.state);


  //  this.clearform();
    this.props.updateFilter('categories', this.state.categories );

    //redirect or reload
    // if(this.props.location.pathname === "/search") {
    //   window.location.reload();
    // } else {
    //   this.props.history.push('/search');
    // }
    this.props.history.push(`/search?${this.state.categories}`);
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
     searchheader = "search-header";
     searchkeyword = "search-keyword";
     searchlocation = "search-location";
     searchsubmit = "search-submit-home";
   } else {
     if (this.props.state.session.currentUser) {
       searchcontainer = "search-container-fix";
     } else {
       searchcontainer = "search-container-top";
     }
     searchheader = "search-header-top";
     searchkeyword = "search-keyword-top";
     searchlocation = "search-location-top";
     searchsubmit = "search-submit-top";
   }

   return (
     <div>
       <div className={searchcontainer}>
         <form className="search_form"  onSubmit={this.handleSubmit}>
           <span className={searchheader}>
             Find
           </span>
           <input className={searchkeyword}type="text"
             placeholder="tacos, cheap dinner, Max's"
              onChange={this.update('categories')}

             />
           <input className={searchlocation}type="text"
               placeholder="New York, NY"
              onChange={this.update('bounds')}
               />
             <button className={searchsubmit} onSubmit={this.handleSubmit}>
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
