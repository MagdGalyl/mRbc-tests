import React, { Component } from "react";

export class Todo extends Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        <li>{this.props.task}</li>
      </div>
    );
  }
}

export default Todo;
