import React, { Component } from "react";
// import Pokegame from "./Pokegame";
// import Clicker from "./Clicker";
// import RollDice from "./RollDice";
// import Lottery from "./Lottery";
// import Lottery2 from "./Lottery2";
// import CoinContainer from "./CoinContainer";
import CoinFlip from "./CoinFlip";

// pokedex Exercise
// State Clicker Exercise

export class App extends Component {
  render() {
    return (
      <div>
        {/* <Pokegame /> */}
        {/* <Clicker /> */}
        {/* <RollDice /> */}
        {/* <Lottery /> */}
        {/* <Lottery2 />
        <Lottery2 title={"Mini Daily"} numBalls={4} maxNum={10} /> */}
        {/* <CoinContainer /> */}
        <CoinFlip />
      </div>
    );
  }
}

export default App;
