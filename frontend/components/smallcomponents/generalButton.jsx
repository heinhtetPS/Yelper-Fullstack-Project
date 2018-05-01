import React from 'react';
import { Link } from 'react-router-dom';

class generalButton extends React.Component {

    constructor ( props ) {
        super( props );
    }

    render () {
      return(
        <li className="filters-element2" onClick={this.props.handleRandom}>
          <label className="random-button">
            <svg className="svg-clock">
              <path d="M2 4v6a2 2 0 0 0 2 2h1v3l4-3h5a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"></path></svg>
            Randomize!</label>
        </li>
      )
    }
}


export default generalButton;
