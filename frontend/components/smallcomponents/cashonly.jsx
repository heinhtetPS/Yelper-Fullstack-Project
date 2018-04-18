import React from 'react';

class CashOnly extends React.Component {

    constructor ( props ) {
        super( props );
        this.state = {CashOnly: props.CashOnly}
    }

  componentWillReceiveProps(nextProps) {
    this.setState( { CashOnly: nextProps.CashOnly } );
    console.log("Inside comp:");
    console.log(this.state);
  }

    render () {
      //state check for class is un-reversed as a temp fix.
      console.log("inside comp render:");
      console.log(this.state);
      return(
        <li className="filters-element2" onClick={this.props.handleCash}>
          <label className={this.state.CashOnly ? 'open-button selected' : 'open-button'}>
            <svg className="svg-clock">
              <path d="M2 4v6a2 2 0 0 0 2 2h1v3l4-3h5a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"></path></svg>
            Cash Only</label>
        </li>
      )
    }
}

export default CashOnly;
