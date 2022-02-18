import React, { Component } from "react";

export class Pokecard extends Component {
  render() {
    const { id, name, type, exp } = this.props;

    console.log(this.props);

    const POKE_API =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

    let padToThree = (num) => (num <= 999 ? `00${num}`.slice(-3) : num);

    let imgSrc = `${POKE_API}${padToThree(id)}.png`;

    return (
      <div>
        <h3>{name}</h3>
        <img src={imgSrc} alt={name} />
        <p>Type:{type}</p>
        <p>Exp:{exp}</p>
      </div>
    );
  }
}

export default Pokecard;
