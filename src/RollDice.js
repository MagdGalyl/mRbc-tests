import React, { Component } from "react";
import Die from "./Die";
import "./RollDice.css";

export class RollDice extends Component {
  constructor(props) {
    super(props);
    state = {
      dsFace: "",
    };
  }
  render() {
    return (
      <div>
        <Die dFace={"two"} />
      </div>
    );
  }
}

export default RollDice;
