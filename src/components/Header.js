import React, { Component } from "react";
import logo from "../logo.svg";

export class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{this.props.myFunc(10, 12)}</p>
      </header>
    );
  }
}
