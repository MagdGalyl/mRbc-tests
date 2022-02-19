import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";
export class Pokedex extends Component {
  // static defaultProps = {
  //   pokeList: [
  //     { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
  //     { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
  //     { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
  //     { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
  //     { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
  //     { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
  //     { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
  //     { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
  //   ],
  // };

  renderList() {
    // const { id, name, type, base_experience } = this.props.pokeList;
    return this.props.pokeList.map((poke) => {
      return (
        <Pokecard
          key={poke.id}
          id={poke.id}
          name={poke.name}
          type={poke.type}
          exp={poke.base_experience}
        />
      );
    });
  }

  render() {
    // console.log(this.props.pokeList);
    let title;
    if (this.props.isWinner) {
      title = <h1 className="Pokedex-winner">Winning Hand</h1>;
    } else {
      title = <h1 className="Pokedex-loser">Losing Hand</h1>;
    }

    return (
      <div>
        {title}
        <h4>Total Experience: {this.props.exp}</h4>
        <div className="Pokedex-container">{this.renderList()}</div>
      </div>
    );
  }
}

export default Pokedex;
