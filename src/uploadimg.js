import React, { Component } from 'react';
import axios from 'axios';
import PickUpTime from './pickuptime'
import InfoTable from './infotable'
import 'bootstrap/dist/css/bootstrap.css'

export default class Upload extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: null,
      image_name: null,
      selectedFile : null
    }
  }

  fileSelector = event => {
    this.setState({
      title: event.target.files[0].name,
      image_name: event.target.files[0].type,
      selectedFile: event.target.files[0]
    });
    // console.log(event.target.files[0]);
  }
  fileHandler = () => {
    // const fdtitle = new FormData();
    // const fdname = new FormData();
    // fdtitle.append('title', this.state.selectedFile, this.state.selectedFile.type)
    // fdname.append('image_name', this.state.selectedFile, this.state.selectedFile.name)
    console.log(this.state.selectedFile);
    axios.post('/api/lug/',{
      title: this.state.title,
      image_name: this.state.image_name
    }).then(res => {
      res.data[0].title = this.state.title,
      res.data[0].image_name = this.state.image_name
      console.log(res.data[0].title);
      console.log(res.data[0].image_name);
      console.log(res.data)
    })
  }
  render(){
    return(
      <div>
      <input type="file" className="btn btn-primary" onChange={this.fileSelector}/>
      <button type="button" className="btn btn-primary"onClick={this.fileHandler}>Upload</button>
      <br />
      <img src={this.state.name} width="500px" height="300px"/>
      <InfoTable locpickup={this.state.address} lugpickup={this.state.long}/>
      <div>{this.props.address}</div>
      </div>
    )
  }

}
