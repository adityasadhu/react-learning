import React, { Component } from "react";
import "./App.css";
import ImageSlider from "./components/ImageSlider";
import Counter from "./components/Counter";

export default class App extends Component {
  state = {
    visible: true
  };

  render() {
    const buttonText = this.state.visible ? "hide" : "show";

    return (
      <div className="App">
        {this.state.visible ? (
          <ImageSlider />
        ) : (
          <div>
            <Counter />
          </div>
        )}
        <button
          onClick={() => {
            this.setState({ visible: !this.state.visible });
          }}
        >
          {buttonText}
        </button>
      </div>
    );
  }
}
