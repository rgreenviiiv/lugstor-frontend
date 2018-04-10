import React from 'react';
import ReactDOM from 'react-dom';

class PickUpTime extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      time: ''
    }
    // this.timepicker = this.timepicker.bind(this)
  }
  // timepicker(e){
  //   const optionSelect = document.querySelectorAll('option')
  //   // console.log(e.target.innerText);
  //   // for(let i = 0; i < optionSelect.length; i++){
  //   //   console.log(optionSelect[i].innerText);
  //   //   // if(e.target.value === optionSelect[i].innerText)
  //   // }
  //   const timed = optionSelect.forEach((item, index) =>{
  //     // if(e === 'click'){
  //     console.log(item.innerText)
  //   })
  //   return timed;
  //
  // }
  componentDidMount(){
    const customSelect = document.querySelector('select')
    const optionSelect = customSelect.querySelectorAll('option')
    optionSelect.forEach((item, index, array)=>{
      // console.log(item.value, item.innerText)
      item.addEventListener('change',()=>{
        console.log(item)
      })
    })
    // optionSelect.addEventListener('click',(e)=>{
    //   console.log(e.target.value)
    // })
  }
  render(){
    return(
      <div>
      <select className="custom-select" onMouseDown={this.timepicker}>
        <option value="What Time" default>What Time?</option>
        <option value="08:00">08:00am</option>
        <option value="08:30">08:30am</option>
        <option value="09:00">09:00am</option>
        <option value="09:30">09:30am</option>
        <option value="10:00">10:00am</option>
        <option value="10:30">10:30am</option>
        <option value="11:00">11:00am</option>
        <option value="11:30">11:30am</option>
        <option value="12:00">12:00pm</option>
        <option value="12:30">12:30pm</option>
        <option value="13:00">1:00pm</option>
        <option value="13:30">1:30pm</option>
        <option value="14:00">2:00pm</option>
        <option value="14:30">2:30pm</option>
        <option value="15:00">3:00pm</option>
        <option value="15:30">3:30pm</option>
        <option value="16:00">4:00pm</option>
        <option value="16:30">4:30pm</option>
        <option value="17:00">5:00pm</option>
        <option value="17:30">5:30pm</option>
        <option value="18:00">6:00pm</option>
        <option value="18:30">6:30pm</option>
        <option value="19:00">7:00pm</option>
        <option value="19:30">7:30pm</option>
      </select>
      </div>
    )
  }
}


export default PickUpTime;
