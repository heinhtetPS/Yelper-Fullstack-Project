import React from 'react';

class OpenNow extends React.Component {

    constructor ( props ) {
        super( props );

		this.state = {
			OpenNow: null
		  }
      this.handleClick = this.handleClick.bind(this);
    }

	componentWillMount () {
		this.setState( { OpenNow: this.props.OpenNow } );
	}

  handleClick() {
    this.setState(function(prevState) {
      return {OpenNow: !prevState.OpenNow};
    });
    console.log(this.state);
  }


    render () {

      if (this.state.OpenNow) {
        return(
          <li className="filters-element2" onClick={this.handleClick}>
            <label className="open-button selected">Open Now</label>
          </li>
        );
      } else {
        return(
          <li className="filters-element2" onClick={this.handleClick}>
            <label className="open-button">Open Now</label>
          </li>
        );
      }

    }

}

export default OpenNow;
