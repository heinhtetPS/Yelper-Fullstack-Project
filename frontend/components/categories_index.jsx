import React from 'react';
import { Link } from 'react-router-dom';
import CategoriesIndexItem from './categories_index_item';

class CategoriesIndex extends React.Component {

  constructor(props) {
    super(props);

  }

  render () {

    return (
      <div className="categories-main">
        <h3 className="Redh3">Browse Business By Category</h3>
      </div>
    );
  }

}

export default CategoriesIndex;
