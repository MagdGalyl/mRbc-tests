import React, { Component } from "react";
// import Coin from "./Coin";

export class CoinContainer extends Component {
  static defaultProps = {
    coinFace: [
      {
        side: "Heads",
        imgSrc: "https://tinyurl.com/react-coin-heads-jpg",
      },
      {
        side: "Tails",
        imgSrc: "https://tinyurl.com/react-coin-tails-jpg",
      },
    ],
  };

  constructor(props) {
    super(props);
    this.state = {
      curCoin: null,
      nFlips: 0,
      nHeads: 0,
      nTails: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  flipCoin() {
    let randIndex = Math.floor(Math.random() * this.props.coinFace.length);

    this.setState();
  }

  handleClick(e) {
    // console.log(e);
    this.flipCoin();
    // this.setState((st) => {
    //   // { isHead: false, isTail: false }
    // });
  }

  renderFace() {
    return (
      <div>
        <button onClick={this.handleClick}>Flip</button>
      </div>
    );
  }

  render() {
    return (
      <div>
        {/* CoinContainer
        <Coin /> */}
        {this.renderFace()}
      </div>
    );
  }
}

export default CoinContainer;
