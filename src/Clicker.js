import React, { Component } from "react";

export class Clicker extends Component {
  constructor(props) {
    super(props);
    this.state = { num: 1 };
    this.handleClicks = this.handleClicks.bind(this);
  }

  handleClicks(e) {
    let rand = Math.floor(Math.random() * 10 + 1);
    this.setState({ num: rand });
  }

  render() {
    let btn = <button onClick={this.handleClicks}>Random Number</button>;
    return (
      <div>
        <h2>Number is: {this.state.num}</h2>
        {this.state.num === 7 ? "You Win" : btn}
      </div>
    );
  }
}

export default Clicker;
