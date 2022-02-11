import React, { Component } from "react";

export class Pokecard extends Component {
  render() {
    return (
      <div>
        <h3>{name}</h3>
        <img src="{img}" />
        <p className="type">{type}</p>
        <p className="EXP">{exp}</p>
      </div>
    );
  }
}

export default Pokecard;
