import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(todo) {
    // let newTodo = { ...todo, id: uuidv4() };
    // console.log(newTodo);
    this.setState({ todos: [...this.state.todos, todo] });

    // this.setState((st) => ({
    //   todos: [...st, newTodo],
    // }));
  }
  render() {
    return (
      <div>
        <h1>TodoList</h1>
        <ul>
          {this.state.todos.map((todo) => {
            return <Todo key={todo.id} task={todo.task} />;
          })}
        </ul>
        <NewTodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default TodoList;
