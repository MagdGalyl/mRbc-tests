// import React, { Component } from "react";
// import Lottoball from "./Lottoball";
// import "./Lottery2.css";

// export class Lottery2 extends Component {
//   static defaultProps = {
//     title: "Lottery2",
//     numBall: 6,
//     maxVal: 40,
//   };

//   constructor(props) {
//     super(props);
//     this.state = { nums: Array.from({ length: this.props.numBall }) };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     let lot = Math.floor(Math.random() * this.props.lotto.maxVal + 1);
//     // console.log(lot);
//     // return this.setState((st) => {
//     //   return { lotto: st.map((lo) => <Lottoball num={lot} />) };
//     // });

//     this.setState((curState) => ({ lotto: curState.lotto.map((lo) => lot) }));
//   }

//   // renderLotto() {
//   //   console.log("first");
//   // }

//   render() {
//     console.log(this.state.lotto);
//     return (
//       <div className="Lot2">
//         {/* <Lottoball num={this.state.lotto} /> */}
//         {/* {this.renderLotto()} */}
//         <h2>{this.props.title}</h2>
//         {this.state.lotto.map((lo) => (
//           <Lottoball num={lo} />
//         ))}
//         <button onClick={this.handleClick}>Generate</button>
//       </div>
//     );
//   }
// }

// export default Lottery2;

import React, { Component } from "react";
import Lottoball from "./Lottoball";
import "./Lottery2.css";

export class Lottery2 extends Component {
  static defaultProps = {
    title: "Lotto",
    numBalls: 6,
    maxNum: 40,
  };

  constructor(props) {
    super(props);
    this.state = { nums: Array.from({ length: this.props.numBalls }) };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((curState) => ({
      nums: curState.nums.map(
        (n) => Math.floor(Math.random() * this.props.maxNum) + 1
      ),
    }));
  }

  render() {
    return (
      <div className="Lot2">
        <h2>{this.props.title}</h2>
        {this.state.nums.map((n) => (
          <Lottoball num={n} />
        ))}
        <button onClick={this.handleClick}>Generate</button>
      </div>
    );
  }
}

export default Lottery2;
