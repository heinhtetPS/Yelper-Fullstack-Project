import React from 'react';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleSubmit(e) {
   e.preventDefault();
   const user = Object.assign({}, this.state);
   //need to define this
  //  this.props.processForm(user);
 }

 whichform() {
   if (this.props.location.pathname === "signup") {
     return(
       <form>
         <input type ="text" placeholder="Username"></input>
         <input type ="text" placeholder="Email"></input>
         <input type ="text" placeholder="Password"></input>
       </form>
     );
   } else {
     return (
       <form>

       </form>
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

export default SessionForm;
