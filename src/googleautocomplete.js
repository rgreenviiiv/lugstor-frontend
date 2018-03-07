import React from 'react'
import PickUpTime from './pickuptime'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import InfoTable from './infotable'
import TheMap from './fetchplace'

// console.log(latLng);

class PlaceSearch extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        address: 'New York, NY',
        lat: null,
        long: null,
      }
      this.handleChange = this.handleChange.bind(this);
      this.onChange = (address) => {
        this.setState({address});
        this.handleChange(address);
      }
  }
  handleChange = (address) => this.props.handleChange(address)
  handleFormSubmit = (e) =>{
    e.preventDefault();

    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.setState({
        lat: latLng.lat,
        long: latLng.lng
      }))
      .catch(error => console.error('Error', error))

  }

  render(){
    const inputProps ={
      value: this.state.address,
      onChange: this.onChange,
    }
    return(
      <div>
      <form onSubmit={this.handleFormSubmit}>
      <PlacesAutocomplete inputProps={inputProps} />
      <button type="submit" className="btn btn-primary btn-lg btn-block">Submit</button>
      </form>
      <PickUpTime />
      <InfoTable locpickup={this.state.address} lugpickup={this.state.long}/>
      </div>

    )
  }
}
export default PlaceSearch
// export default GoogleApiWrapper({
//   apiKey: ('AIzaSyAwm-LYKzUDDK02FHV1PcX3EVWMd0d1Zhs')
// })(PlaceSearch)
