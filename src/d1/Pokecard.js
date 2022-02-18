import React, { Component } from "react";

const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

let padToThree = (num) => (num <= 999 ? `00${num}`.slice(-3) : num);
// This solution only work with 00 else check
// https://stackoverflow.com/questions/2998784/how-to-output-numbers-with-leading-zeros-in-javascript
export class Pokecard extends Component {
  render() {
    // console.log(this.props);
    let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;
    const { name, type, exp } = this.props;
    return (
      <div>
        <h3>{name}</h3>
        <img src={imgSrc} alt="name" />
        <p className="type">{type}</p>
        <p className="EXP">{exp}</p>
      </div>
    );
  }
}

export default Pokecard;
