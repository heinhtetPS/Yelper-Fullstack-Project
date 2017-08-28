import React from 'react';
import { Link } from 'react-router-dom';
import BizIndexItem from './biz_index_item';

class ResultsShow extends React.Component {

  constructor(props) {
    super(props);
  }



  render() {
    return (
      <div className="results-page-container">
        <div className="top-shelf-options">

        </div>
        <div className="results-content">
            <div className="biz-index-container">

            </div>
            <div className="map-column-container">

            </div>
        </div>
      </div>
    );
  }
}

export default ResultsShow;
