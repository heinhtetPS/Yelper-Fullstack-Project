import React from 'react';
import { Link } from 'react-router-dom';
import BizIndexItem from './biz_index_item';
import Bizmap from '../map';

class ResultsShow extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBusinesses();

    //because these are async, we need to set conditionals for rendering
  }


  render() {
    console.log(this.props);
    return (
      <div className="results-page-container">
        <div className="top-shelf-options">

        </div>
        <div className="results-content">
            <div className="biz-index-container">

            </div>
            <div className="map-column-container">
              <div className="show-map-container">
                <Bizmap
                  businesses={this.props.businesses}
                  singleBiz={false}
                  fetchBusinesses={this.props.fetchBusinesses}/>
              </div>
            </div>
        </div>
      </div>
    );
  }
}



export default ResultsShow;
