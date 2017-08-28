import React from 'react';
import { Link } from 'react-router-dom';
import BizIndexItem from './biz_index_item';

class Featured extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchBusinesses();
    // this.setState({Leftbox: this.props.fetchABusiness(1)});
    // this.setState({Middlebox: this.props.fetchABusiness(2)});
    // this.setState({Rightbox: this.props.fetchABusiness(1)});
    //because these are async, we need to set conditionals for rendering
  }

  render() {

    //i want to put each businesses's full info inside lbox, mbox and rbox
    //and then distribute this info into the HTML when it has loaded
    //simply index through the array received and set conditionals to not render if array < 3
    //for now this can be all of them, later when you have tons of biz, grab random onesg

    //time to put index item up here because its better than
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
              biz={business}     />)}
        </div>
      </div>
    );

  }


}

export default Featured;
