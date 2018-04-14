import React from 'react';

class Takeout extends React.Component {

    constructor ( props ) {
        super( props );
		    this.state = {Takeout: props.Takeout}
    }

	componentWillReceiveProps (nextProps) {
		this.setState( { Takeout: nextProps.Takeout } );
    console.log("inside takeout: " + this.state.Takeout);
	}

  render () {
    //state check for class is reversed as a temp fix. 
      return(
        <li className="filters-element2" onClick={this.props.handleTakeout}>
          <label className={!this.state.Takeout ? 'open-button' : 'open-button selected'}>
            <svg className="svg-bag">
              <path d="M12 5V1H6v4H3v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5h-3zM7 2h4v3H7V2z"></path></svg>
            Takeout</label>
        </li>
      )
    }

}

export default Takeout;
