import React, { Component } from "react";

export default class TodoForm extends Component {
  state = {
    text: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      text: ""
    });
    if (this.state.text.length !== 0) {
      this.props.onSubmit({
        id: Math.random(),
        text: this.state.text,
        complete: false
      });
    }
  };

  render() {
    return (
      <form>
        <input
          name="text"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="todo..."
        />
        <button onClick={this.handleSubmit}>add todo</button>
      </form>
    );
  }
}
