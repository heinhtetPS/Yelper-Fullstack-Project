import React from 'react';
import { Link } from 'react-router-dom';
import BizIndexItem from './biz_index_item';
import DollarsFilter from '../smallcomponents/dollars';
import OpenButton from '../smallcomponents/opennow';
import DeliveryButton from '../smallcomponents/delivery';
import TakeoutButton from '../smallcomponents/takeout';
import Bizmap from '../map';

class ResultsShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Dollars: {1: false,
                2: false,
                3: false,
                4: false},
      OpenNow: false,
      Delivery: false,
      Takeout: false
    }
  }

  componentDidMount() {
      this.props.updateFilter("searchterm", this.props.location.search.slice(1));

      //in order to add other filters...we need to check state & if its not null or true,
      // then add these things
      // but this needs to be in some other lifecycle, like when state changes instead of mount
      this.props.updateFilter("dollars", this.state.Dollars);

  }


  toggleDollars(number) {
    switch (number) {
      case 1:
          if (this.state.Dollars[1]) {
            this.setState((prevState) => {
              return {
                Dollars: {1: false,
                          2: false,
                          3: false,
                          4: false}};
            });
          } else {
            this.setState((prevState) => {
              return {
                Dollars: {1: true,
                          2: false,
                          3: false,
                          4: false}};
            });
          }
          this.props.updateFilter("dollars", this.state.Dollars);
        break;
      case 2:
          if (this.state.Dollars[2]) {
            this.setState((prevState) => {
              return {
                Dollars: {1: false,
                          2: false,
                          3: false,
                          4: false}};
            });
          } else {
            this.setState((prevState) => {
              return {
                Dollars: {1: false,
                          2: true,
                          3: false,
                          4: false}};
            });
          }
          this.props.updateFilter("dollars", this.state.Dollars);
        break;
      case 3:
          if (this.state.Dollars[3]) {
            this.setState((prevState) => {
              return {
                Dollars: {1: false,
                          2: false,
                          3: false,
                          4: false}};
            });
          } else {
            this.setState((prevState) => {
              return {
                Dollars: {1: false,
                          2: false,
                          3: true,
                          4: false}};
            });
          }
          this.props.updateFilter("dollars", this.state.Dollars);
        break;
      case 4:
          if (this.state.Dollars[4]) {
            this.setState((prevState) => {
              return {
                Dollars: {1: false,
                          2: false,
                          3: false,
                          4: false}};
            });
          } else {
            this.setState((prevState) => {
              return {
                Dollars: {1: false,
                          2: false,
                          3: false,
                          4: true}};
            });
          }
          this.props.updateFilter("dollars", this.state.Dollars);
        break;
      default:
    }
  }//end of dollars

  handleOpen() {
    this.setState(function(prevState) {
      return {OpenNow: !prevState.OpenNow};
    });
    this.props.updateFilter("OpenFilter", this.state.OpenNow);
  }

  handleTakeout() {
    this.setState(function(prevState) {
      return {Takeout: !prevState.Takeout};
    });
    this.props.updateFilter("TakeoutFilter", this.state.Takeout);
  }

  handleDelivery() {
    this.setState(function(prevState) {
      return {Delivery: !prevState.Delivery};
    });
    this.props.updateFilter("DeliveryFilter", this.state.Delivery);
  }


  render() {
    //vars populate when props come in
    let searchterm = this.props.location.search.slice(1);
    let msgbox = this.props.businesses.length === 0 ? "" : "hidden";

    return (
      <div className="results-page-container">
        <div className="top-shelf-options">
          <div className="top-shelf-content">
            <h2>Best {searchterm}(s) in New York, NY</h2>

              <ul className="filters-row">
                    <DollarsFilter toggleDollars={this.toggleDollars.bind(this)}
                                    Dollars={this.state.Dollars}/>
                      <ul className="filters-row2">
                        <OpenButton handleOpen={this.handleOpen.bind(this)}
                                    OpenNow={this.state.OpenNow}/>
                        <DeliveryButton handleDelivery={this.handleDelivery.bind(this)}
                                    Delivery={this.state.Delivery}/>
                        <TakeoutButton handleTakeout={this.handleTakeout.bind(this)}
                                    Takeout={this.state.Takeout}/>
                      </ul>
              </ul>
          </div>
        </div>
        <div className="results-content">
            <div className="biz-index-container">
              <ul>
                <p className={msgbox}>Sorry, your search returned no results.</p>
                {this.props.businesses.map(
                  business => <BizIndexItem
                  key={business.id}
                  biz={business}     />)}
              </ul>
            </div>
            <div className="map-column-container">
              <div className="results-map-container">
                <div className="results-map-header">

                </div>
                <Bizmap
                  businesses={this.props.businesses}
                  singleBiz={false}
                  fetchBusinesses={this.props.fetchBusinesses}
                  updateFilter = {this.props.updateFilter}
                  />
              </div>
              <div className="create-question">
                <h2 className="Redh2">Not here? Tell us what we're missing.</h2>
                <p>If the business you're looking for isn't here, add it!</p>
                <Link to="/addbusiness"className="new-biz-button">Add a Business</Link>
              </div>
            </div>
        </div>
      </div>
    );
  }
}



export default ResultsShow;
