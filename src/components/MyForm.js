import React, { Component } from "react";

export default class MyForm extends Component {
  state = {
    name: "",
    rememberMe: false,
    title: "A"
  };

  handleChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  handleCheckBox = event => {
    this.setState({
      rememberMe: event.target.checked
    });
  };

  handleSelect = event => {
    this.setState({ title: event.target.value });
  };

  render() {
    return (
      <div>
        <input onChange={this.handleChange} />
        <p>{this.state.name}</p>
        <input
          type="checkbox"
          checked={this.state.rememberMe}
          onChange={this.handleCheckBox}
        />
        <div>
          <select value={this.state.title} onChange={this.handleSelect}>
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>
        </div>
      </div>
    );
  }
}
