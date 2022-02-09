import React, { Component } from "react";
import SlotMac from "./SlotMac";
export class App extends Component {
  render() {
    return (
      <div>
        <h1> Slot Machine Exercise </h1>
        <SlotMac title="1" s1={"x"} s2={"y"} s3={"z"} />
        <SlotMac title="2" s1={"x"} s2={"x"} s3={"x"} />

        <br />
        <br />
        <h1> xyz Exercise </h1>
      </div>
    );
  }
}

export default App;
