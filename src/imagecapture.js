import React from 'react'
import p5 from 'p5';
import 'p5/lib/addons/p5.dom';

export default class ImageAttempt extends React.Component {

  componentDidMount(){
    this.canvas = new p5(this.props.sketch, this.wrapper)
  }
  render(){
    return(
      <div>
      <div ref={wrapper => this.wrapper = wrapper}>
      </div>
      <h2>Pick Up Location:</h2>
      <h1>{this.props.address}</h1>
      <h2>Drop off Location</h2>
      <h1>{this.props.dropoff}</h1>
      </div>
    )
  }
}
