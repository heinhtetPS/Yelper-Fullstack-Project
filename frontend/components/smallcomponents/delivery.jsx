import React from 'react';

class Delivery extends React.Component {

    constructor ( props ) {
        super( props );

		this.state = {
			Delivery: null
		  }
      this.handleClick = this.handleClick.bind(this);
    }

	componentWillMount () {
		this.setState( { Delivery: this.props.Delivery } );
	}

  handleClick() {
    this.setState(function(prevState) {
      return {Delivery: !prevState.Delivery};
    });
  }


    render () {

      if (this.state.Delivery) {
        return(
          <li className="filters-element2" onClick={this.handleClick}>
            <label className="open-button selected">Delivery</label>
          </li>
        );
      } else {
        return(
          <li className="filters-element2" onClick={this.handleClick}>
            <label className="open-button">Delivery</label>
          </li>
        );
      }

    }

}

export default Delivery;
