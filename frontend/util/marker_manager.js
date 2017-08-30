

export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }


  updateMarkers(businesses) {
    console.log('time to update the map');

    const allBusiness = {};
    businesses.forEach(biz => allBusiness[biz.id] = biz);

    businesses
    .filter(biz => !this.markers[biz.id])
    .forEach(newbiz => this.createMarkerFromBiz(newbiz));

    Object.keys(this.markers)
    .filter(bizID => !allBusiness[bizID])
    .forEach((bizID) => this.removeMarker(this.markers[bizID]));
  }

  createMarkerFromBiz(biz) {
    const position = new google.maps.LatLng(biz.lat, biz.lng);
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
