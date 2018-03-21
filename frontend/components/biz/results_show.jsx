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
      if (this.state.Dollars)
      this.props.updateFilter("dollars", this.state.Dollars);
      if (this.state.OpenNow)
      this.props.updateFilter("OtherFilters", this.state.OpenNow);
      if (this.state.Delivery)
      this.props.updateFilter("OtherFilters", this.state.Delivery);
      if (this.state.Takeout)
      this.props.updateFilter("OtherFilters", this.state.Takeout);
  }

  toggleDollars(number) {
    switch (number) {
      case 1:
          if (this.state[1]) {
            this.setState((prevState) => {
              return {1: false,
                      2: false,
                      3: false,
                      4: false};
            });
          } else {
            this.setState((prevState) => {
              return {1: true,
                      2: false,
                      3: false,
                      4: false};
            });
          }
        break;
      case 2:
          if (this.state[2]) {
            this.setState((prevState) => {
              return {1: false,
                      2: false,
                      3: false,
                      4: false};
            });
          } else {
            this.setState((prevState) => {
              return {1: false,
                      2: true,
                      3: false,
                      4: false};
            });
          }
        break;
      case 3:
          if (this.state[3]) {
            this.setState((prevState) => {
              return {1: false,
                      2: false,
                      3: false,
                      4: false};
            });
          } else {
            this.setState((prevState) => {
              return {1: false,
                      2: false,
                      3: true,
                      4: false};
            });
          }
        break;
      case 4:
          if (this.state[4]) {
            this.setState((prevState) => {
              return {1: false,
                      2: false,
                      3: false,
                      4: false};
            });
          } else {
            this.setState((prevState) => {
              return {1: false,
                      2: false,
                      3: false,
                      4: true};
            });
          }
        break;
      default:
    }
  }//end of dollars

  handleClick() {
    this.setState(function(prevState) {
      return {OpenNow: !prevState.OpenNow};
    });
    console.log(this.state);
  }


  render() {
    //vars populate when props come in
    let searchterm = this.props.location.search.slice(1);
    let msgbox = this.props.businesses.length === 0 ? "" : "hidden";

    // dollar toggle has 4 buttons: $ $$ $$$ $$$$
    // remove 1 if another is clicked, only 1 can be picked at a time
    // 3 single toggles: open now, Delivery, Takeout
    return (
      <div className="results-page-container">
        <div className="top-shelf-options">
          <div className="top-shelf-content">
            <h2>Best {searchterm}(s) in New York, NY</h2>

              <ul className="filters-row">
                    <DollarsFilter toggleDollars={this.toggleDollars.bind(this)}
                                    />
                      <ul className="filters-row2">
                        <OpenButton handleClick={this.handleClick.bind(this)}
                                    OpenNow={this.state.OpenNow}/>
                        <DeliveryButton value={this.state.Delivery}/>
                        <TakeoutButton value={this.state.Takeout}/>
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
