import React from 'react';

class OpenNow extends React.Component {

    constructor ( props ) {
        super( props );
        this.state = {OpenNow: props.OpenNow}
    }

  componentWillReceiveProps(nextProps) {
    this.setState( { OpenNow: nextProps.OpenNow } );
  }

    render () {
      //state check for class is reversed as a temp fix. 
      return(
        <li className="filters-element2" onClick={this.props.handleOpen}>
          <label className={!this.state.OpenNow ? 'open-button' : 'open-button selected'}>
            <svg className="svg-clock">
              <path d="M9 17A8 8 0 1 1 9 1a8 8 0 0 1 0 16zM9 2C5.14 2 2 5.14 2 9s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm3.223 10.098a.998.998 0 0 1-.588-.192L8 9.256V5a1 1 0 0 1 2 0v3.24l2.812 2.05a1 1 0 0 1-.59 1.808z"></path></svg>
            Open Now</label>
        </li>
      )
    }
}

export default OpenNow;
