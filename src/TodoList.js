import React, { Component } from "react";
// import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
// import EditTodoForm from "./EditTodoForm";
export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }

  addTodo(newTodo) {
    this.setState({ todos: [...this.state.todos, newTodo] });

    // let newTodo = { ...todo, id: uuidv4() };
    // console.log(newTodo);
    // this.setState((st) => ({
    //   todos: [...st, newTodo],
    // }));
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  }

  updateTodo(id, updatedTask) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }

  render() {
    return (
      <div>
        <h1>TodoList</h1>
        <ul>
          {this.state.todos.map((todo) => {
            return (
              <Todo
                id={todo.id}
                key={todo.id}
                task={todo.task}
                removeTodo={this.removeTodo}
                updateTodo={this.updateTodo}
              />
            );
          })}
        </ul>
        <NewTodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default TodoList;
