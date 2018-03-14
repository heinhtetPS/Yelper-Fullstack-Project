import React from 'react';

class DollarsFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {1: false,
                  2: false,
                  3: false,
                  4: false};

    this.toggleDollars = this.toggleDollars.bind(this);
  }

  toggleDollars(number) {
    switch (number) {
      case 1:
          this.setState((prevState) => {
            return {1: true,
                    2: false,
                    3: false,
                    4: false};
          });
        break;
      case 2:
          this.setState((prevState) => {
            return {1: false,
                    2: true,
                    3: false,
                    4: false};
          });
        break;
      case 3:
          this.setState((prevState) => {
            return {1: false,
                    2: false,
                    3: true,
                    4: false};
          });
        break;
      case 4:
          this.setState((prevState) => {
            return {1: false,
                    2: false,
                    3: false,
                    4: true};
          });
        break;
      default:

    }

  }

  render() {

    if (this.state[1]) {
      return (
        <ul className="dollars-container">
            <li className="dollars-button-selected" onClick={(e) => this.toggleDollars(1)}>$</li>
            <li className="dollars-button-unselected" onClick={(e) => this.toggleDollars(2)}>$$</li>
            <li className="dollars-button-unselected" onClick={(e) => this.toggleDollars(3)}>$$$</li>
            <li className="dollars-button-unselected" onClick={(e) => this.toggleDollars(4)}>$$$$</li>
        </ul>
      )
    } else if (this.state[2]) {
      return (
        <ul className="dollars-container">
            <li className="dollars-button-unselected" onClick={(e) => this.toggleDollars(1)}>$</li>
            <li className="dollars-button-selected" onClick={(e) => this.toggleDollars(2)}>$$</li>
            <li className="dollars-button-unselected" onClick={(e) => this.toggleDollars(3)}>$$$</li>
            <li className="dollars-button-unselected" onClick={(e) => this.toggleDollars(4)}>$$$$</li>
        </ul>
      )
    } else if (this.state[3]) {
      return (
        <ul className="dollars-container">
            <li className="dollars-button-unselected" onClick={(e) => this.toggleDollars(1)}>$</li>
            <li className="dollars-button-unselected" onClick={(e) => this.toggleDollars(2)}>$$</li>
            <li className="dollars-button-selected" onClick={(e) => this.toggleDollars(3)}>$$$</li>
            <li className="dollars-button-unselected" onClick={(e) => this.toggleDollars(4)}>$$$$</li>
        </ul>
      )
    } else if (this.state[4]) {
      return (
        <ul className="dollars-container">
            <li className="dollars-button-unselected" onClick={(e) => this.toggleDollars(1)}>$</li>
            <li className="dollars-button-unselected" onClick={(e) => this.toggleDollars(2)}>$$</li>
            <li className="dollars-button-unselected" onClick={(e) => this.toggleDollars(3)}>$$$</li>
            <li className="dollars-button-selected" onClick={(e) => this.toggleDollars(4)}>$$$$</li>
        </ul>
      )
    } else {
      return (
        <ul className="dollars-container">
            <li className="dollars-button-unselected" onClick={(e) => this.toggleDollars(1)}>$</li>
            <li className="dollars-button-unselected" onClick={(e) => this.toggleDollars(2)}>$$</li>
            <li className="dollars-button-unselected" onClick={(e) => this.toggleDollars(3)}>$$$</li>
            <li className="dollars-button-unselected" onClick={(e) => this.toggleDollars(4)}>$$$$</li>
        </ul>
      )
    }
  }
}

export default DollarsFilter;
