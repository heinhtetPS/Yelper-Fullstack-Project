import React from 'react';

class Takeout extends React.Component {

    constructor ( props ) {
        super( props );

		this.state = {Takeout: props.Takeout}
    }

	componentWillReceiveProps (nextProps) {
		this.setState( { Takeout: nextProps.Takeout } );
	}

  render () {

      if (this.state.Takeout) {
        return(
          <li className="filters-element2" onClick={this.props.handleTakeout}>
            <label className="open-button selected">Takeout</label>
          </li>
        );
      } else {
        return(
          <li className="filters-element2" onClick={this.props.handleTakeout}>
            <label className="open-button">Takeout</label>
          </li>
        );
      }

    }

}

export default Takeout;
