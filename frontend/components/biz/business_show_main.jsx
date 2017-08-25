import React from 'react';
import { Link } from 'react-router-dom';

class BusinessShowMain extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <p>
        THIS IS THE SHOW PAGE FOR {this.props.biz.name}
      </p>
    );
  }
}

export default BusinessShowMain;
