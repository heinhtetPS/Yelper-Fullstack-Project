import React from 'react';
import ReactDOM from 'react-dom';
import MarkerManager from '../util/marker_manager';

const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

//this is centered on A/a building
const mapOptions = {
  center: { lat: 40.7446887, lng: -73.9965651 },
  zoom: 14
};


class Bizmap extends React.Component {

  componentDidMount() {
    const map = this.refs.map;
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);

    if (this.props.biz) {
      this.props.fetchABusiness(this.props.biz.id);
    } else {
      this.registerListeners();
      this.MarkerManager.updateMarkers(this.props.businesses);
    }
  }

  componentDidUpdate() {
    if (this.props.singleBiz) {
      const targetBizKey = Object.keys(this.props.businesses)[0];
      const targetBiz = this.props.businesses[targetBizKey];
      this.MarkerManager.updateMarkers([targetBiz]);
    } else {
      this.MarkerManager.updateMarkers(this.props.businesses);
    }
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
