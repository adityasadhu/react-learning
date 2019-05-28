import React, { Component } from "react";
import "./App.css";
import FetchRandomUser from "./components/FetchRandomUser";

export default class App extends Component {
  state = {
    visible: true
  };

  render() {
    const buttonText = "toggle counter";

    return (
      <div className="App">
        <FetchRandomUser />
      </div>
    );
  }
}
