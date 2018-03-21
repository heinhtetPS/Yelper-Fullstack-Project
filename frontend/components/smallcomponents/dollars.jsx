import React from 'react';

class DollarsFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {1: false,
                  2: false,
                  3: false,
                  4: false};

  }

  render() {

    if (this.state[1]) {
      return (
        <ul className="dollars-container">
            <li className="dollars-button-selected" onClick={(e) => this.props.toggleDollars(1)}>$</li>
            <li className="dollars-button-unselected" onClick={(e) => this.props.toggleDollars(2)}>$$</li>
            <li className="dollars-button-unselected" onClick={(e) => this.props.toggleDollars(3)}>$$$</li>
            <li className="dollars-button-unselected" onClick={(e) => this.props.toggleDollars(4)}>$$$$</li>
        </ul>
      )
    } else if (this.state[2]) {
      return (
        <ul className="dollars-container">
            <li className="dollars-button-unselected" onClick={(e) => this.props.toggleDollars(1)}>$</li>
            <li className="dollars-button-selected" onClick={(e) => this.props.toggleDollars(2)}>$$</li>
            <li className="dollars-button-unselected" onClick={(e) => this.props.toggleDollars(3)}>$$$</li>
            <li className="dollars-button-unselected" onClick={(e) => this.props.toggleDollars(4)}>$$$$</li>
        </ul>
      )
    } else if (this.state[3]) {
      return (
        <ul className="dollars-container">
            <li className="dollars-button-unselected" onClick={(e) => this.props.toggleDollars(1)}>$</li>
            <li className="dollars-button-unselected" onClick={(e) => this.props.toggleDollars(2)}>$$</li>
            <li className="dollars-button-selected" onClick={(e) => this.props.toggleDollars(3)}>$$$</li>
            <li className="dollars-button-unselected" onClick={(e) => this.props.toggleDollars(4)}>$$$$</li>
        </ul>
      )
    } else if (this.state[4]) {
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
