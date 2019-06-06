import React, { Component } from "react";
import "./App.css";
import SwithButton from "./SwithButton";

class App extends Component {
  state = {
    time: 0,
    active: false
  };

  handleClick = () => {
    this.setState({
      active: !this.state.active
    });
  };

  render() {
    return (
      <>
        <p>{this.state.time}</p>
        <SwithButton />
      </>
    );
  }
}

export default App;
