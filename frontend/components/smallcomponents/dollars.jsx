import React from 'react';

class DollarsFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {Dollars:
                    {On: props.Dollars.On,
                    Off: props.Dollars.Off }};
  }

  componentWillReceiveProps(nextProps) {
    this.setState( { Dollars: nextProps.Dollars } );
  }

  render() {

    if (this.state.Dollars.On.includes(1)) {
      return (
        <ul className="dollars-container">
            <li className="dollars-button-selected" onClick={(e) => this.props.toggleDollars(1)}>$</li>
            <li className="dollars-button-unselected" onClick={(e) => this.props.toggleDollars(2)}>$$</li>
            <li className="dollars-button-unselected" onClick={(e) => this.props.toggleDollars(3)}>$$$</li>
            <li className="dollars-button-unselected" onClick={(e) => this.props.toggleDollars(4)}>$$$$</li>
        </ul>
      )
    } else if (this.state.Dollars.On.includes(2)) {
      return (
        <ul className="dollars-container">
            <li className="dollars-button-unselected" onClick={(e) => this.props.toggleDollars(1)}>$</li>
            <li className="dollars-button-selected" onClick={(e) => this.props.toggleDollars(2)}>$$</li>
            <li className="dollars-button-unselected" onClick={(e) => this.props.toggleDollars(3)}>$$$</li>
            <li className="dollars-button-unselected" onClick={(e) => this.props.toggleDollars(4)}>$$$$</li>
        </ul>
      )
    } else if (this.state.Dollars.On.includes(3)) {
      return (
        <ul className="dollars-container">
            <li className="dollars-button-unselected" onClick={(e) => this.props.toggleDollars(1)}>$</li>
            <li className="dollars-button-unselected" onClick={(e) => this.props.toggleDollars(2)}>$$</li>
            <li className="dollars-button-selected" onClick={(e) => this.props.toggleDollars(3)}>$$$</li>
            <li className="dollars-button-unselected" onClick={(e) => this.props.toggleDollars(4)}>$$$$</li>
        </ul>
      )
    } else if (this.state.Dollars.On.includes(4)) {
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
