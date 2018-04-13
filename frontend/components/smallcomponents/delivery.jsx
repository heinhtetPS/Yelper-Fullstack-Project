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
      return(
        <li className="filters-element2" onClick={this.props.handleDelivery}>
          <label className={this.state.Delivery ? 'open-button' : 'open-button selected'}>
            <svg className="svg-truck">
              <path d="M4 4V3h3v1H4m4-2H3v2H2a1 1 0 0 0-1 1v7h9V5a1 1 0 0 0-1-1H8V2" opacity=".502"></path><path d="M17 10.93L15 9.5V4h-5v8H7.49a2.49 2.49 0 0 0-1.99-1 2.49 2.49 0 0 0-1.99 1H1v2h2.05a2.502 2.502 0 0 0 4.9 0h3.1a2.5 2.5 0 0 0 4.9 0H17v-3.07zM5.5 14.75a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zM12 6h1v3h-1V6zm1.5 8.75a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"></path></svg>
            Delivery</label>
        </li>
      )
    }
}

export default Delivery;
