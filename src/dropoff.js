import React from 'react'
import PickUpTime from './pickuptime'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

class Dropoff extends React.Component {
  constructor(props) {
    super(props)

      this.onChange = this.onChange.bind(this);

  }
  onChange = (dropoff) => this.props.handleChange(dropoff)
  handleFormSubmit = (e) =>{
    e.preventDefault();

    geocodeByAddress(this.props.dropoff)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error))

  }

  render(){
    const inputProps ={
      value: this.props.dropoff,
      onChange: this.onChange
    }
    return(
      <div>
      <form onSubmit={this.handleFormSubmit}>

      <PlacesAutocomplete inputProps={inputProps} />
      <PlacesAutocomplete inputProps={inputProps} />
      <button type="submit" className="btn btn-primary btn-lg btn-block">Submit</button>
      </form>
      <PickUpTime />
      <h2>Pick Up Location:</h2>
      <h1>{this.props.address}</h1>
      <h2>Drop Off Location:</h2>
      <h1>{this.props.dropoff}</h1>
      </div>

    )
  }
}
export default Dropoff;
