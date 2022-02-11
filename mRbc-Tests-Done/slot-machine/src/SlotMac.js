import React, { Component } from "react";

export class SlotMac extends Component {
  render() {
    const { title, s1, s2, s3 } = this.props;
    return (
      <div>
        <h3>Machine {title}</h3>
        <p>
          {s1} {s2} {s3}
        </p>
        <h3>{s1 === s2 && s2 === s3 ? "You win" : "You lose"}</h3>
      </div>
    );
  }
}

export default SlotMac;
