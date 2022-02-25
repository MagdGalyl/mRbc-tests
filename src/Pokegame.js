import React, { Component } from "react";
import Pokedex from "./Pokedex";

export class Pokegame extends Component {
  static defaultProps = {
    pokeList: [
      { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
      { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
      { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
      { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
      { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
      { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
      { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
    ],
  };

  render() {
    let hand1 = [];
    let hand2 = [...this.props.pokeList];

    while (hand2 > hand1) {
      let randIndex = Math.floor(Math.random() * hand2.length);

      let randPoke = hand2.splice(randIndex, 1)[0];
      hand1.push(randPoke);
    }

    // console.log(hand1);
    // console.log(hand2);
    // const { id, name, type, base_experience } = this.props.pokeList;

    let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

    return (
      <div>
        <Pokedex pokeList={hand1} exp={exp1} isWinner={exp1 > exp2} />
        <Pokedex pokeList={hand2} exp={exp2} isWinner={exp2 > exp1} />
      </div>
    );
  }
}

export default Pokegame;