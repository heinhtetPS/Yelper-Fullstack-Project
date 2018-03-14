import React from 'react';

class Takeout extends React.Component {

    constructor ( props ) {
        super( props );

		this.state = {
			Takeout: null
		  }
      this.handleClick = this.handleClick.bind(this);
    }

	componentWillMount () {
		this.setState( { Takeout: this.props.Takeout } );
	}

  handleClick() {
    this.setState(function(prevState) {
      return {Takeout: !prevState.Takeout};
    });
  }


    render () {

      if (this.state.Takeout) {
        return(
          <li className="filters-element2" onClick={this.handleClick}>
            <label className="open-button selected">Takeout</label>
          </li>
        );
      } else {
        return(
          <li className="filters-element2" onClick={this.handleClick}>
            <label className="open-button">Takeout</label>
          </li>
        );
      }

    }

}

export default Takeout;
