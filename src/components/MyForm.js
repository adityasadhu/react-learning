import React, { Component } from "react";

export default class MyForm extends Component {
  state = {
    name: "",
    rememberMe: false,
    title: "A"
  };

  handleChange = (event, fieldName, isCheckbox) => {
    this.setState({
      [fieldName]: isCheckbox ? event.target.checked : event.target.value
    });
  };

  handleCheckBox = event => {
    this.setState({
      rememberMe: event.target.checked
    });
  };

  render() {
    return (
      <div>
        <input
          value={this.state.name}
          onChange={event => this.handleChange(event, "name")}
        />
        <p>{this.state.name}</p>
        <input
          type="checkbox"
          checked={this.state.rememberMe}
          onChange={event => this.handleChange(event, "rememberMe", true)}
        />
        <div>
          <select
            value={this.state.title}
            onChange={event => this.handleChange(event, "title")}
          >
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>
        </div>
      </div>
    );
  }
}
