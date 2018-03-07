import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class TheMap extends Component{
  constructor(props){
    super(props)
    this.state = {
      lat: null,
      long: null
    }
  }
  render(){
    return(
      <Map
      google={this.props.google}
      zoom={13}
      initialCenter={{
        lat: this.state.lat,
        lng: this.state.long
      }}
    >
    </Map>

    )
  }
}


export default GoogleApiWrapper({
  apiKey: ('AIzaSyD7_6vbTc-nJQ1-6FNbXUuXOhybyvT0qUc')
})(TheMap)
