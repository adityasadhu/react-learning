import React, { Component } from "react";
import "./App.css";
import ImageSlider from "./components/ImageSlider";
import Counter from "./components/Counter";
import MyForm from "./components/MyForm";
import ValiationForm from "./components/ValidationForm";

export default class App extends Component {
  state = {
    visible: true
  };

  render() {
    const buttonText = "toggle counter";

    return (
      <div className="App">
        <ValiationForm />
      </div>
    );
  }
}
