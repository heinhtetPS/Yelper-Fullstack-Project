import React from 'react';

class Delivery extends React.Component {

    constructor ( props ) {
        super( props );

        this.state = {Delivery: props.Delivery}
    }

    componentWillReceiveProps (nextProps) {
  		this.setState( { Delivery: nextProps.Delivery } );
  	}

    render () {

      if (this.state.Delivery) {
        return(
          <li className="filters-element2" onClick={this.props.handleDelivery}>
            <label className="open-button selected">Delivery</label>
          </li>
        );
      } else {
        return(
          <li className="filters-element2" onClick={this.props.handleDelivery}>
            <label className="open-button">Delivery</label>
          </li>
        );
      }

    }

}

export default Delivery;
