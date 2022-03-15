import React, { Component } from "react";
import Colorbox from "./Colorbox";
import "./ColorsContainer.css";
import { choice } from "./Helpers";

export class ColorsContainer extends Component {
  static defaultProps = {
    colors: [
      "#264653",
      "#2A9D8F",
      "#E9C46A",
      "#F4A261",
      "#E76F51",
      "#9b2226",
      "#ae2012",
      "#bb3e03",
      "#ca6702",
      "#ee9b00",
      "#e9d8a6",
      "#94d2bd",
      "#0a9396",
      "#005f73",
      "#001219",
      "#fca311",
      "#14213d",
      "#e63946",
      "#eb5e28",
      "#252422",
      "#403d39",
      "#1d3557",
      "#457b9d",
      "#a8dadc",
      // "#ccc5b9",
      // "#e5e5e5",
      // "#f1faee",
      // "#fffcf2",
    ],
    nBox: 18,
  };

  // Test 01
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     pal: Array.from({ length: this.props.nBox }, (b) => {
  //       return <Colorbox color={choice(this.props.colors)} />;
  //     }),
  //   };
  //   this.handleClick = this.handleClick.bind(this);
  // }

  // handleClick() {
  //   console.log("clicked");
  // }

  // render() {
  //   return (
  //     <div className="ColorsContainer-body">
  //       {/* <check-flex-box /> */}
  //       {this.state.pal}
  //     </div>
  //   );
  // }

  // Test 02
  constructor(props) {
    super(props);
    this.state = {
      pal: Array.from({ length: this.props.nBox }),
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("clicked");
  }

  render() {
    return (
      <div className="ColorsContainer-body">
        {/* <check-flex-box /> */}
        {this.state.pal.map((b) => {
          return (
            <button onClick={this.handleClick}>
              <Colorbox color={choice(this.props.colors)} />
            </button>
          );
        })}
      </div>
    );
  }
}

export default ColorsContainer;
