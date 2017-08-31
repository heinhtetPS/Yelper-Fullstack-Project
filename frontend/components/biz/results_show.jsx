import React from 'react';
import { Link } from 'react-router-dom';
import BizIndexItem from './biz_index_item';
import Bizmap from '../map';

class ResultsShow extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBusinesses(this.props.categories);

    //because these are async, we need to set conditionals for rendering
  }


  render() {
    let searchterm = "searchterm";
    if (this.props.categories)
    searchterm = this.props.categories;
    console.log(this.props);
    let filteredBizz = null;
    // if (this.props.categories)
    // filteredBizz =
    return (
      <div className="results-page-container">
        <div className="top-shelf-options">
          <div className="top-shelf-content">
            <h2>Best {searchterm} in Brooklyn, NY</h2>

          </div>
        </div>
        <div className="results-content">
            <div className="biz-index-container">
              <ul>
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
            </div>
        </div>
      </div>
    );
  }
}



export default ResultsShow;
