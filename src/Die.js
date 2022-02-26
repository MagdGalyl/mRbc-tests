import React, { Component } from "react";
// import RollDice from "./RollDice";

export class die extends Component {
  render() {
    
    return (
      <div>
        {/* <i class="fa-solid fa-dice-one"></i> */}
        <i
          className={`fa-solid fa-dice-${this.props.dFace} fa-10x fa-color`}
        ></i>
      </div>
    );
  }
}

export default die;
