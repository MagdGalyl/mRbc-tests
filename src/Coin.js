import React, { Component } from "react";

export class Coin extends Component {
  render() {
    return (
      <div>
        <img src={this.props} alt={this.props} />
      </div>
    );
  }
}

export default Coin;
