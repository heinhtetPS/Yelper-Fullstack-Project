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
   if (this.props.location.pathname === "/signup") {
     return(
       <form>
         <input type ="text" placeholder="Username"></input> <br />
         <input type ="text" placeholder="Email"></input> <br />
         <input type ="text" placeholder="Password"></input> <br />
       </form>
     );
   } else {
     return (
       <form>
         <input type ="text" placeholder="Username"></input> <br />
         <input type ="text" placeholder="Password"></input> <br />
       </form>
     );
   }
 }

 render() {
   debugger
   return (
     <div>
       {this.whichform()}
     </div>
   );
 }

  //...
}

export default SessionForm;
