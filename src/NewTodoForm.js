import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

export class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addTodo({ ...this.state, id: uuidv4() });
    this.setState({ task: "" });
    // console.log(this.props);
  }

  handleChange(evt) {
    // console.log(evt.target);
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="task">New Todo</label>
        <input
          type="text"
          placeholder="New Todo"
          id="task"
          name="task"
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button>Add New ToDo</button>
      </form>
    );
  }
}

export default NewTodoForm;
