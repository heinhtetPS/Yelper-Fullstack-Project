import React from 'react';

class DollarsFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Dollars: props.Dollars
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState( { Dollars: nextProps.Dollars } );
    console.log("Inside dollars" + this.state.Dollars);
  }

  render() {
      return (
        <ul className="dollars-container">
            <li className={this.state.Dollars.includes(1) ? 'dollars-button-selected' : 'dollars-button-unselected'}
              onClick={(e) => this.props.toggleDollars(1)}>$</li>
            <li className={this.state.Dollars.includes(2) ? 'dollars-button-selected' : 'dollars-button-unselected'}
              onClick={(e) => this.props.toggleDollars(2)}>$$</li>
            <li className={this.state.Dollars.includes(3) ? 'dollars-button-selected' : 'dollars-button-unselected'}
              onClick={(e) => this.props.toggleDollars(3)}>$$$</li>
            <li className={this.state.Dollars.includes(4) ? 'dollars-button-selected' : 'dollars-button-unselected'}
              onClick={(e) => this.props.toggleDollars(4)}>$$$$</li>
        </ul>
      )
  }
}

export default DollarsFilter;
