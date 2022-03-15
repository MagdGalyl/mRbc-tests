import React, { Component } from "react";

export class Colorbox extends Component {
  render() {
    return (
      <div>
        <div
          className="Colorbox-box"
          style={{ backgroundColor: this.props.color }}
        ></div>
      </div>
    );
  }
}

export default Colorbox;
