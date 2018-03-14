import React from 'react';
import { Link } from 'react-router-dom';
import BizIndexItem from './biz_index_item';
import DollarsFilter from '../smallcomponents/dollars';
import Bizmap from '../map';

class ResultsShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {openNow: false,
                  delivery: false,
                  takeOut: false};

    this.toggleSelected = this.toggleSelected.bind(this);
  }

  componentDidMount() {
      //this used to look at filter in state but now it just looks at search term
      //changing this from categories to searchterm didn't change anything at all
      this.props.updateFilter("searchterm", this.props.location.search.slice(1));
      console.log(this.state);
  }


  toggleSelected(which) {
    switch (which) {
      case "open":
      console.log("why doesnt it come");
      this.setState((prevState) => {
        return {openNow: true}
      });
      console.log(this.state.openNow);
        break;
      case "delivery":
      this.setState((prevState) => {
        return {delivery: true}
      });
      console.log(this.state.delivery);
        break;
      case "takeout":
      this.setState((prevState) => {
        return {takeOut: true}
      });
      console.log(this.state.takeOut);
        break;
      default:

    }
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
                  <li className="filters-element1">
                    <DollarsFilter />
                  </li>

                  <li className="filters-element2" onClick={(e) => this.toggleSelected("open")}>
                    <label className="open-button selected">Open Now</label>
                  </li>

                  <li className="filters-element2" onClick={(e) => this.toggleSelected("delivery")}>
                    <label className="delivery-button">Delivery</label>
                  </li>

                  <li className="filters-element2" onClick={(e) => this.toggleSelected("takeout")}>
                    <label className="takeout-button">Take-out</label>
                  </li>
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
