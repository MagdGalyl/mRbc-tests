import React, { Component } from "react";

export class CoinFace extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <img src={this.props.side.imgSrc} alt={this.props.side.title} />
      </div>
    );
  }
}

export default CoinFace;
