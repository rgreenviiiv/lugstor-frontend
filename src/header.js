import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './home';
import Upload from './uploadimg';
import PlaceSearch from './googleautocomplete';

class Header extends Component{
  constructor(props){
    super(props)
    this.state = {
      address: null,
      time: null,
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(address){
    this.setState({
      address: address
    })
  }
  render(){
    return(
      <Router>
      <div className="App">
      <nav className="nav nav-tabs justify-content-center">
      <li className="nav-item list-group-item bg-primary"><Link className="text-white" to="/placesSearch">Pick Up </Link></li>
      <li className="nav-item list-group-item bg-primary"><Link className="text-white" to="/uploadimg">Upload Image </Link></li>
      <li className="nav-item list-group-item bg-primary"><Link className="text-white" to="/checkout">Checkout </Link></li>
      </nav>
      <Route exact path='/' component={Home}/>
      <Route path='/uploadimg' render={()=> <Upload address={this.state.address}/>} />
      <Route path='/placesSearch'render={()=> <PlaceSearch handleChange={this.handleChange}/>} />
      </div>
      </Router>
    )
  }
}


export default Header;
