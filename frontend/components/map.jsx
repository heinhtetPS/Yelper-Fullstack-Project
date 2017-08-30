import React from 'react';
import ReactDOM from 'react-dom';
import MarkerManager from '../util/marker_manager';

const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});




class Bizmap extends React.Component {

  componentDidMount() {

    //this is centered on A/a building
    const mapOptions = {
      center: { lat: this.props.biz.map_lat, lng: this.props.biz.map_lng },
      zoom: 14
    };

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
      this.MarkerManager.updateMarkers([this.props.biz]);
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
