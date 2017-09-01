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

    let msgbox = this.props.businesses.length === 0 ? "" : "hidden";





    return (
      <div className="results-page-container">
        <div className="top-shelf-options">
          <div className="top-shelf-content">
            <h2>Best searchterm in Brooklyn, NY</h2>

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
                <Link to="/addbusiness"className="post-button">Add a Business</Link>
              </div>
            </div>
        </div>
      </div>
    );
  }
}



export default ResultsShow;
