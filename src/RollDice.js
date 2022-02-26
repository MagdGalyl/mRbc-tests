import React, { Component } from "react";
import Die from "./Die";
import "./RollDice.css";

export class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dsFace: "one",
    };
    this.roll = this.roll.bind(this);
  }

  roll() {
    let dice = ["one", "two", "three", "four", "five", "six"];
    let rand = Math.floor(Math.random() * dice.length);

    this.setState({ dsFace: dice[rand] });
  }

  render() {
    console.log(this.state.dsFace);
    return (
      <div>
        <Die dFace={this.state.dsFace} />
        <Die dFace={this.state.dsFace} />
        <button onClick={this.roll}>Roll Dice</button>
      </div>
    );
  }
}

export default RollDice;
