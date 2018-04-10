import React from 'react';

class Checkout extends React.Component{

render(){
return(
  <div className="container">
  <div className="row">
  <div className="col-12">
  <h2>Delivering: </h2>
  <img src={this.props.image} />
  <h2> for: </h2>
  <h1 className="text-success">{this.props.name}</h1>
  <h2> At: </h2>
  <h1 className="text-info">{this.props.time}</h1>
  <h2 >Pick Up Location:</h2>
  <h1 className="text-primary">{this.props.address}</h1>
  <h2>Drop off Location:</h2>
  <h1 className="text-warning">{this.props.dropoff}</h1>
</div>
</div>
</div>
)
}
}
export default Checkout;
