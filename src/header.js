import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './home';
// import Upload from './uploadimg';
import PlaceSearch from './googleautocomplete';
import Dropoff from './dropoff';
import ImageAttempt from './imagecapture';
// import sketch from './imagefunc';
import Checkout from './checkout';
import ActualImage from './newimagecap';
// import WebCam from 'react-webcam';


class Header extends Component{
  constructor(props){
    super(props)
    this.state = {
      name: 'Your Name ',
      address: 'New York, NY',
      time: null,
      image: null,
      dropoff: 'Queens, NY',
      snapshots: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleChange2 = this.handleChange2.bind(this)
    this.handleChange3 = this.handleChange3.bind(this)
    this.nameSubmit = this.nameSubmit.bind(this)
    this.capture = this.capture.bind(this)
    this.setRef = this.setRef.bind(this)
  }
  handleChange(address){
    this.setState({
      address: address
    })
  }
  handleChange2(dropoff){
    this.setState({
      dropoff: dropoff
    })
  }
  handleChange3(name){
    this.setState({
      name: name
    })
  }
  nameSubmit = (e) =>{
    e.preventDefault();
    const input = document.querySelector('input');
    console.log(input.value);
    this.setState({
      name: input.value
    })
  }
  setRef = (webcam) => {
    this.webcam = webcam;
  }
  capture = (e) => {
    const imageSrc = this.webcam.getScreenshot();
    console.log(e);
    console.log(imageSrc);
    this.setState({
      image: this.webcam.getScreenshot()
    })
  };
  render(){
    return(
      <Router>
      <div className="App">
      <nav className="nav nav-tabs justify-content-center mt-3">
      <li className="nav-item list-group-item bg-primary"><Link className="text-white" to="/placesSearch">PICK UP/ DROP OFF</Link></li>
      <li className="nav-item list-group-item bg-primary"><Link className="text-white" to="/newimagecap">IMAGE </Link></li>
      {/*<li className="nav-item list-group-item bg-primary"><Link className="text-white" to="/dropoff">Drop Off </Link></li>*/}
      <li className="nav-item list-group-item bg-primary"><Link className="text-white" to="/checkout">CHECKOUT </Link></li>

      </nav>
      <Route exact path='/' component={Home}/>
      {/*<Route path='/uploadimg' render={()=> <Upload address={this.state.address} dropoff={this.state.dropoff}/>} />*/}
      <Route path='/placesSearch'render={()=> <PlaceSearch name={this.state.name} address={this.state.address} dropoff={this.state.dropoff} handleChange={this.handleChange} handleChange2={this.handleChange2} handleChange3={this.handleChange3} nameSubmit={this.nameSubmit}/>} />
      <Route path='/dropoff'render={()=> <Dropoff address={this.state.address} dropoff={this.state.dropoff} handleChange={this.handleChange}/>} />
      <Route path='/imagecap' render={()=> <ImageAttempt sketch={this.state.image} address={this.state.address} dropoff={this.state.dropoff}/>} />
      <Route path='/newimagecap' render={()=> <ActualImage image={this.state.image} name={this.state.name} address={this.state.address} dropoff={this.state.dropoff} capture={this.capture} setRef={this.setRef}/>} />
      <Route path='/checkout' render={()=> <Checkout name={this.state.name} address={this.state.address} dropoff={this.state.dropoff} image={this.state.image}/>} />
      </div>
      </Router>
    )
  }
}


export default Header;
