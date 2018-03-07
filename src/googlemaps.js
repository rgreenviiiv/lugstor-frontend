import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      selectedPlace: 'name'
    };
    this.fetchPlaces = this.fetchPlaces.bind(this);
  }
  fetchPlaces(mapProps, map){
    const { google } = mapProps;
    const service = new google.maps.places.PlacesService(map);

  }
  render(){
    return(
      <div>
      <input type="text" placeholder="Where to pick up"/>
      <Map
      onReady={this.fetchPlaces}

      google={this.props.google}
      zoom={14}
      initialCenter={{
        lat: 40.7556980,
        lng: -73.9691600
      }}
      >
      <Marker onClick={this.onMarkerClick} name={'Current location'} />
      <InfoWindow onClose={this.onInfoWindowClose}>
        <div>
          <h1>{this.state.selectedPlace.name}</h1>
        </div>
      </InfoWindow>
      </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAwm-LYKzUDDK02FHV1PcX3EVWMd0d1Zhs')
})(MapContainer)
