import React from 'react'
import { render } from 'react-dom'
import PickUpTime from './pickuptime'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import ReactMapboxGl from 'react-mapbox-gl';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoicmdyZWVuZGV2IiwiYSI6ImNqZjdtMmZseDBlYWk0ZWtmaTJ5ODVybWgifQ.q40TMVwk6Vvzd6rihxranQ';

// const Map = ReactMapboxGl({
//   accessToken: 'pk.eyJ1IjoicmdyZWVuZGV2IiwiYSI6ImNqZjdtMmZseDBlYWk0ZWtmaTJ5ODVybWgifQ.q40TMVwk6Vvzd6rihxranQ'
// })
// let pickupLat = null,
// let pickupLong = null,
// let dropoffLat = null,
// let dropoffLong = null

class PlaceSearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'John Doe',
      lat: null,
      long: null
    }
      this.onChange = this.onChange.bind(this);
      this.onChange2 = this.onChange2.bind(this);
      this.onchange3 = this.onchange3.bind(this);
  }
  onChange = (address) => this.props.handleChange(address)
  onChange2 = (dropoff) => this.props.handleChange2(dropoff)
  onchange3 = (e) => this.props.nameSubmit(e);
  handleFormSubmit = (e) =>{
    e.preventDefault();
    geocodeByAddress(this.props.address)
      .then(results => console.log(getLatLng(results[0])))
      .then(latLng => console.log('Success',latLng))
      .catch(error => console.error('Error', error))
  }
  handleFormSubmit2 = (e) =>{
    e.preventDefault();
    geocodeByAddress(this.props.dropoff)
      .then(results => console.log(getLatLng(results[0])))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error))
  }

  componentDidMount(){
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://style/mapbox/streets-v8",
      center: [-74.0075478, 40.7259983],
      zoom: 12.75
    })
  }

  render(){
    const inputProps ={
      value: this.props.address,
      onChange: this.onChange
    }
    const inputProps2 = {
      value: this.props.dropoff,
      onChange: this.onChange2
    }
    const style = {
      height: '100%',
      width: '100%'
    }
    return (
        <div className="container">
        <div className="row">
        <div className="col-6">
        <form onSubmit={this.onchange3}>
          <h2>Your Name:</h2>
          <input type="text" placeholder="Please enter your name"/>
        </form>
        <form onSubmit={this.handleFormSubmit}>
          <h2>Pick Up Location:</h2>
          <PlacesAutocomplete inputProps={inputProps} />
        </form>

        <form onSubmit={this.handleFormSubmit2}>
          <h2>Drop Off Location:</h2>
          <PlacesAutocomplete inputProps={inputProps2} />
        </form>

        <h2>Pick Up Location:</h2>
        <h1>{this.props.address}</h1>
        <h2>drop Off Location:</h2>
        <h1>{this.props.dropoff}</h1>
        <h2>Luggage Pick up for:</h2>
        <h1>{this.props.name}</h1>
        </div>
        <div className="col-6">
        <h1>Map will be here soon!</h1>
        <div style={style} ref={el => this.mapContainer = el}></div>
        </div>
        </div>
      </div>
    )
  }
}
export default PlaceSearch
// export default GoogleApiWrapper({
//   apiKey: ('AIzaSyAwm-LYKzUDDK02FHV1PcX3EVWMd0d1Zhs')
// })(PlaceSearch)
