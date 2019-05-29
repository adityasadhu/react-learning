import React, { Component } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

export default class TodoList extends Component {
  state = {
    todos: [],
    todosToShow: "all",
    toggleAllComplete: true
  };

  addTodo = todo => {
    this.setState({
      todos: [todo, ...this.state.todos]
    });
  };

  toggleComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            id: todo.id,
            text: todo.text,
            complete: !todo.complete
          };
        } else {
          return todo;
        }
      })
    });
  };

  updateTodoToShow = status => {
    this.setState({
      todosToShow: status
    });
  };

  handleDeleteTodo = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  };

  handleDeleteAllComplete = () => {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.complete)
    });
  };

  handleDeleteAll = () => {
    this.setState({
      todos: []
    });
  };

  handleToggleAllComplete = () => {
    this.setState({
      todos: this.state.todos.map(todo => ({
        id: todo.id,
        text: todo.text,
        complete: !this.state.toggleAllComplete
      })),
      toggleAllComplete: !this.state.toggleAllComplete
    });
  };

  render() {
    let todos = [];

    if (this.state.todosToShow === "all") {
      todos = this.state.todos;
    } else if (this.state.todosToShow === "active") {
      todos = this.state.todos.filter(todo => !todo.complete);
    } else if (this.state.todosToShow === "complete") {
      todos = this.state.todos.filter(todo => todo.complete);
    }

    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        {todos.map(todo => (
          <Todo
            key={todo.id}
            toggleComplete={() => this.toggleComplete(todo.id)}
            onDelete={() => this.handleDeleteTodo(todo.id)}
            todo={todo}
          />
        ))}
        <div>
          todos left: {this.state.todos.filter(todo => !todo.complete).length}
        </div>
        <div>
          <button onClick={() => this.updateTodoToShow("all")}>all</button>
          <button onClick={() => this.updateTodoToShow("active")}>
            active
          </button>
          <button onClick={() => this.updateTodoToShow("complete")}>
            complete
          </button>
        </div>
        {this.state.todos.filter(todo => todo.complete).length ? (
          <div>
            <button onClick={this.handleDeleteAllComplete}>
              Delete all complete
            </button>
          </div>
        ) : null}
        {this.state.todos.length ? (
          <div>
            <button onClick={this.handleDeleteAll}>Delete all</button>
          </div>
        ) : null}
        <div>
          <button onClick={this.handleToggleAllComplete}>
            toggle all complete {`${this.state.toggleAllComplete}`}
          </button>
        </div>
      </div>
    );
  }
}
