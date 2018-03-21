import React from 'react';

class DollarsFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {Dollars:
             {1: false,
              2: false,
              3: false,
              4: false}};

  }

  componentWillReceiveProps(nextProps) {
    this.setState( { Dollars: nextProps.Dollars } );
  }

  render() {

    if (this.state.Dollars[1]) {
      return (
        <ul className="dollars-container">
            <li className="dollars-button-selected" onClick={(e) => this.props.toggleDollars(1)}>$</li>
            <li className="dollars-button-unselected" onClick={(e) => this.props.toggleDollars(2)}>$$</li>
            <li className="dollars-button-unselected" onClick={(e) => this.props.toggleDollars(3)}>$$$</li>
            <li className="dollars-button-unselected" onClick={(e) => this.props.toggleDollars(4)}>$$$$</li>
        </ul>
      )
    } else if (this.state.Dollars[2]) {
      return (
        <ul className="dollars-container">
            <li className="dollars-button-unselected" onClick={(e) => this.props.toggleDollars(1)}>$</li>
            <li className="dollars-button-selected" onClick={(e) => this.props.toggleDollars(2)}>$$</li>
            <li className="dollars-button-unselected" onClick={(e) => this.props.toggleDollars(3)}>$$$</li>
            <li className="dollars-button-unselected" onClick={(e) => this.props.toggleDollars(4)}>$$$$</li>
        </ul>
      )
    } else if (this.state.Dollars[3]) {
      return (
        <ul className="dollars-container">
            <li className="dollars-button-unselected" onClick={(e) => this.props.toggleDollars(1)}>$</li>
            <li className="dollars-button-unselected" onClick={(e) => this.props.toggleDollars(2)}>$$</li>
            <li className="dollars-button-selected" onClick={(e) => this.props.toggleDollars(3)}>$$$</li>
            <li className="dollars-button-unselected" onClick={(e) => this.props.toggleDollars(4)}>$$$$</li>
        </ul>
      )
    } else if (this.state.Dollars[4]) {
      return (
        <ul className="dollars-container">
            <li className="dollars-button-unselected" onClick={(e) => this.props.toggleDollars(1)}>$</li>
            <li className="dollars-button-unselected" onClick={(e) => this.props.toggleDollars(2)}>$$</li>
            <li className="dollars-button-unselected" onClick={(e) => this.props.toggleDollars(3)}>$$$</li>
            <li className="dollars-button-selected" onClick={(e) => this.props.toggleDollars(4)}>$$$$</li>
        </ul>
      )
    } else {
      return (
        <ul className="dollars-container">
            <li className="dollars-button-unselected" onClick={(e) => this.props.toggleDollars(1)}>$</li>
            <li className="dollars-button-unselected" onClick={(e) => this.props.toggleDollars(2)}>$$</li>
            <li className="dollars-button-unselected" onClick={(e) => this.props.toggleDollars(3)}>$$$</li>
            <li className="dollars-button-unselected" onClick={(e) => this.props.toggleDollars(4)}>$$$$</li>
        </ul>
      )
    }
  }
}

export default DollarsFilter;
