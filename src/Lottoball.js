import React, { Component } from "react";
import "./Lottery2.css";
// import Lottery2 from "./Lottery2";

export class Lottoball extends Component {
  render() {
    return (
      <div className="LBall-circle">
        {this.props.num}
        {/* <></> */}
      </div>
    );
  }
}

export default Lottoball;
