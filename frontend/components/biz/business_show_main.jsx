import React from 'react';
import { Link } from 'react-router-dom';

class BusinessShowMain extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //this finds the business based on the last number in
    //url. Will not work for >10 businesses
    this.props.fetchABusiness(
      this.props.location.pathname.slice(-1)
    );
  }


  render() {
    const {currentbiz} = this.props;

    console.log(currentbiz)
    return (
      <h1>
        THIS IS THE SHOW PAGE FOR {currentbiz}
      </h1>
    );
  }
}

export default BusinessShowMain;
