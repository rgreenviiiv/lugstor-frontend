  import React from 'react';
import WebCam from 'react-webcam'

class ActualImage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      image: null
    }
    this.oncapture = this.oncapture.bind(this)
    this.onSetRef = this.onSetRef.bind(this)
  }
  onSetRef = (webcam) => this.props.setRef(webcam)
  setRef = (webcam) => {
    this.webcam = webcam;
  }

  oncapture = (e) => this.props.capture(e)
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
      <div className="container">
      <div className="row">
      <div className="col-8">
        <WebCam
          audio={false}
          height={600}
          width={600}
          ref={this.onSetRef}
          screenshotFormat="image/jpeg"
        />
        <button type="button" className="btn btn-primary" onClick={this.oncapture}>Capture photo</button>
        </div>
        <div className="col-4">
        <h1>Luggage Items pick up for {this.props.name}</h1>
        <img src={this.props.image} alt="Luggage"/>
        <h2>Pick Up Location:</h2>
        <h1>{this.props.address}</h1>
        <h2>drop Up Location:</h2>
        <h1>{this.props.dropoff}</h1>
        <h2>Luggage Pick up for:</h2>
        <h1>{this.props.name}</h1>
      </div>
      </div>
      </div>
    )
  }
}
export default ActualImage;
