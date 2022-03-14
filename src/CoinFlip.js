import React, { Component } from "react";
import CoinFace from "./CoinFace";
import headsImg from "./images/heads.png";
import tailsImg from "./images/tails.png";

export class CoinFlip extends Component {
  static defaultProps = {
    sides: [
      {
        title: "Heads",
        imgSrc: headsImg,
      },
      {
        title: "Tails",
        imgSrc: tailsImg,
      },
    ],
  };

  constructor(props) {
    super(props);
    this.state = {
      numFlip: 0,
      numHeads: 0,
      numTails: 0,
      curCoin: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  flipZcoins() {
    const idx = Math.floor(Math.random() * this.props.sides.length);

    // console.log(idx);
    // console.log(this.props.sides[idx]);

    this.setState((curState) => ({
      curCoin: this.props.sides[idx],
      numFlip: curState.numFlip + 1,
    }));

    if (this.state.curCoin === this.props.sides[0]) {
      this.setState((curState) => ({ numHeads: curState.numHeads + 1 }));
    } else if (this.state.curCoin === this.props.sides[1]) {
      this.setState((curState) => ({ numTails: curState.numTails + 1 }));
    }
  }

  handleClick(e) {
    this.flipZcoins();
  }

  render() {
    return (
      <div>
        {this.state.curCoin && <CoinFace side={this.state.curCoin} />}
        <p>Flips Number: {this.state.numFlip}</p>
        <p> Heads Flips Number: {this.state.numHeads} </p>
        <p>Tails Flips Number: {this.state.numTails} </p>

        <button onClick={this.handleClick}>Flip Coins</button>
      </div>
    );
  }
}

export default CoinFlip;
