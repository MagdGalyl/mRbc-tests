import React, { Component } from "react";
import Die from "./Die";

export class RollDice extends Component {
  render() {
    return (
      <div>
        <Die />
        <Die />
      </div>
    );
  }
}

export default RollDice;
