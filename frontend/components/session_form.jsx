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

 render() {

 }

  //...
}

export default SessionForm;
