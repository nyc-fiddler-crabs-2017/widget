import React, { Component } from 'react';
import './Widget.css'


class Widget extends React.Component {
  constructor(){
    super()
    this.state = {
      clickCount: 656,
      age: 67
    }
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler(){
    this.setState((prevState, props) => {
        return {clickCount: prevState.clickCount + 1};
});
  }

  render(){
    return(
      <div>
       <label>Click Counter</label>
       <input value={"I have been ckicked " + this.state.clickCount + "times"}
       onClick={this.clickHandler} className="input"/>
      </div>
    )
  }
}

export default Widget;
