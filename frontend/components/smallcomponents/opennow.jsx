import React from 'react';

class OpenNow extends React.Component {

    constructor ( props ) {
        super( props );

		this.state = {
			OpenNow: null
		  }
    }

	componentWillMount () {
		this.setState( { OpenNow: this.props.OpenNow } );
	}


    render () {

      if (this.state.OpenNow) {
        return(
          <li className="filters-element2" onClick={this.props.handleClick}>
            <label className="open-button selected">Open Now</label>
          </li>
        );
      } else {
        return(
          <li className="filters-element2" onClick={this.props.handleClick}>
            <label className="open-button">Open Now</label>
          </li>
        );
      }

    }

}

export default OpenNow;
