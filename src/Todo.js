import React, { Component } from "react";
// import EditTodoForm from "./EditTodoForm";

export class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { isEditing: false, task: this.props.task };
    this.handleRemove = this.handleRemove.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleRemove(evt) {
    this.props.removeTodo(this.props.id);
  }

  toggleForm() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  handleUpdate(evt) {
    evt.preventDefault();
    this.props.updateTodo(this.props.id, this.state.task);
    this.setState({ isEditing: false });
  }

  handleChange(evt) {
    // console.log(evt.target)
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    // console.log(this.props);
    let result;
    if (this.state.isEditing) {
      // <EditTodoForm />
      result = (
        <div>
          <form onSubmit={this.handleUpdate}>
            <input
              type="text"
              // id={this.props.id}
              value={this.state.task}
              name="task"
              onChange={this.handleChange}
            />
          </form>
          <button>Save</button>
        </div>
      );
    } else {
      result = (
        <div>
          <button onClick={this.toggleForm}>Edit</button>
          <button onClick={this.handleRemove}>X</button>
          <li>{this.props.task}</li>
        </div>
      );
    }
    return result;
  }
}

export default Todo;
