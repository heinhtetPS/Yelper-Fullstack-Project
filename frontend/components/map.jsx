import React from 'react';
import ReactDOM from 'react-dom';
import MarkerManager from '../util/marker_manager';

const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});




class Bizmap extends React.Component {

  componentDidMount() {

    //this is centered on props location
    //this is made for single biz, need to change for results
    //Brooklyn defaults: 40.650404    -74.0119036    12
    let mapOptions = {};

    if (this.props.singleBiz) {
      mapOptions = {
        center: { lat: this.props.biz.map_lat, lng: this.props.biz.map_lng },
        zoom: 14
      };

    } else {
      mapOptions = {
        center: { lat: 40.7449978, lng: -73.9937579 },
        zoom: 10
      };

    }



    const map = this.refs.map;
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);

    if (this.props.singleBiz) {
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

  //this is required to do search results bounds
  registerListeners() {
    this.map.addListener('idle', () => {
      const latLngBounds = this.map.getBounds();
      const northEast = {
        lat: latLngBounds.getNorthEast().lat(),
          lng: latLngBounds.getNorthEast().lng(),
      };
      const southWest = {
        lat: latLngBounds.getSouthWest().lat(),
        lng: latLngBounds.getSouthWest().lng(),
      };
      const bounds = {
        northEast,
        southWest,
      };
      this.props.updateFilter('bounds', bounds);
    });
  }


  handleMarkerClick(biz) {

  }

  render() {

    let mapClass = "";
    if (this.props.singleBiz) {
      mapClass = "show-map-container";
    } else {
      mapClass = "results-map-container";
    }
    return (
        <div className={mapClass} ref={ map => this.mapNode = map }/>
    );
  }
}

export default Bizmap;
