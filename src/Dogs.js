import React, { Component } from "react";
import pomeranian from "./images/pomeranian.jpg";
import samoyed from "./images/samoyed.jpg";
import siberianHusky from "./images/siberian_husky.jpg";
import { Route, Switch, NavLink, Link, Routes } from "react-router-dom";
import DogsList from "./DogsList";

export class Dogs extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: pomeranian,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!",
        ],
      },
      {
        name: "Hazel",
        age: 3,
        src: samoyed,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs.",
        ],
      },
      {
        name: "Tubby",
        age: 4,
        src: siberianHusky,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food.",
        ],
      },
    ],
  };

  render() {
    return (
      <div>
        <div className="container">
          <h1 className="display-1">DogApp</h1>
          <Routes>
            <Route
            <Route
              exact
              path="/dogs"
              render={() => <DogsList dogs={this.props.dogs} />}
            />
          </Routes>
        </div>
      </div>
    );
  }
}

export default Dogs;
