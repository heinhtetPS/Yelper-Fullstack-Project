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
            <svg className="svg-star2">
              <path d="M12 1.5l2.61 6.727 6.89.53-5.278 4.688 1.65 7.055L12 16.67 6.13 20.5l1.648-7.055L2.5 8.757l6.89-.53L12 1.5z"></path></svg>
            Randomize!</label>
        </li>
      )
    }
}


export default generalButton;
