import React from 'react';
import ReactDOM from 'react-dom';

class Bizmap extends React.Component {
  componentDidMount() {
    //this is centered on SF
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 13
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
  }

  componentDidUpdate() {

  }

  registerListeners() {

  }

  handleMarkerClick(biz) {

  }

  render() {
    return (
        <div className="show-map-container" ref={ map => this.mapNode = map }/>
    );
  }
}

export default Bizmap;
