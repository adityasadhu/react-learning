import React, { Component } from "react";

export default class MyForm extends Component {
  state = {
    name: "",
    rememberMe: false,
    title: "A"
  };

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <p>{this.state.name}</p>
        <input
          name="rememberMe"
          type="checkbox"
          checked={this.state.rememberMe}
          onChange={this.handleChange}
        />
        <div>
          <select
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          >
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>
        </div>
        <button type="submit">submit</button>
      </form>
    );
  }
}
