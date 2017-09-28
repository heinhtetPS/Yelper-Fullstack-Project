import React from 'react';
import { Link } from 'react-router-dom';
import BizIndexItem from './biz_index_item';

class Featured extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchBusinesses();

    //because these are async, we need to set conditionals for rendering
  }

  render() {

    let passpath = "";
    if (this.props.match)
    passpath = this.props.match.path;

    let test = "This is a test";

    //passing in shit that will fail loudly and cause error states
    //BUG: make a failed login and then come back to homepage to seee
    //4th featured item with empty shit. Errors item
    return (
      <div className="featured_container">
        <h3 className="Redh3">Hot & New Businesses</h3>
        <div className="bizzes_container">
            {this.props.biz.map(
              business => <BizIndexItem
              key={business.id}
              biz={business}
              path={test}     />)}
        </div>
      </div>
    );

  }


}

export default Featured;
