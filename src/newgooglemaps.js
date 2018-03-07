import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


function initMap(){
  console.log('something about a map');
}

class NewGmap extends Component{
  constructor(props) {
    super(props)
    this.state = {
      namesOnScreen: [1,2,3,4],
      places: 'new google.maps.places.PlacesService(map)'
    }
  }
  handleSubmit() {

  }
  componentWillMount(){
    const script = document.createElement('script');

    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAwm-LYKzUDDK02FHV1PcX3EVWMd0d1Zhs&libraries=places&callback=initMap";
    script.async = true;
    document.body.appendChild(script);

  }
  componentDidMount() {
    // var map = new google.maps.Map(document.getElementById('map'), {
    //       center: {lat: -33.8688, lng: 151.2195},
    //       zoom: 13
    //     });

    function initMap(){
      let card = document.getElementById('pac-card');
      let input = document.getElementById('pac-input');
      let types = document.getElementById('type-selector');
      let strictBounds = document.getElementById('strict-bounds-selector');

      // map.controls[google.maps.ControlPosition.TOP_RIGHT].push(card);

      // var autocomplete = new google.maps.places.Autocomplete(input);
    }
  }
  render(){
    return(
      <div>
      <div className="pac-card" id="pac-card">
        <div>
          <div id="title">
            Autocomplete search
          </div>
          <div id="type-selector" className="pac-controls">
            <input type="radio" name="type" id="changetype-all" checked="checked"/>
            <label htmlFor="changetype-all">All</label>

            <input type="radio" name="type" id="changetype-establishment"/>
            <label htmlFor="changetype-establishment">Establishments</label>

            <input type="radio" name="type" id="changetype-address"/>
            <label htmlFor="changetype-address">Addresses</label>

            <input type="radio" name="type" id="changetype-geocode"/>
            <label htmlFor="changetype-geocode">Geocodes</label>
         </div>
         <div id="strict-bounds-selector" className="pac-controls">
            <input type="checkbox" id="use-strict-bounds" value=""/>
            <label htmlFor="use-strict-bounds">Strict Bounds</label>
         </div>
      </div>
      <div id="pac-container">
        <input id="pac-input" type="text" placeholder="Enter a location"/>
      </div>
    </div>
    <div id="map"></div>
    <div id="infowindow-content">
      <img src="" width="16" height="16" id="place-icon"/>
      <span id="place-name"  className="title"></span><br/>
      <span id="place-address"></span>
    </div>
    <Map
      google={this.props.google}
      initialCenter={{
        lat: 40.7556980,
        lng: -73.9691600
      }}
       zoom={11}
      >
    </Map>
    </div>
    )
  }
}
export default GoogleApiWrapper({
  apiKey: ('AIzaSyAwm-LYKzUDDK02FHV1PcX3EVWMd0d1Zhs')
})(NewGmap)
