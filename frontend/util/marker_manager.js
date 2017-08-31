

export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }


  updateMarkers(businesses) {
    console.log('time to update the map');

    //keep a list of all the businesses we're looking at now
    const allBusiness = {};
    businesses.forEach(biz => allBusiness[biz.id] = biz);

    //for each business create a marker on map
    businesses
    .filter(biz => !this.markers[biz.id])
    .forEach(newbiz => this.createMarkerFromBiz(newbiz));

    //get rid of old marks that aren't in allBusiness anymore
    Object.keys(this.markers)
    .filter(bizID => !allBusiness[bizID])
    .forEach((bizID) => this.removeMarker(this.markers[bizID]));

  }

  createMarkerFromBiz(biz) {
    //here is where the actual creation happens
    const position = new google.maps.LatLng(biz.map_lat, biz.map_lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      bizID: biz.id
    });

    // marker.addListener('click', () => this.handleClick(bench));
    // this.markers[marker.benchId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.BizID].setMap(null);
    delete this.markers[marker.BizID];
  }
}
