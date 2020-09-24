import React, { Component } from "react";
import ThemeContext from "./ThemeContext";
import Child from './Child';

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ThemeContext.Provider value={{ background: "green", color: "blue" }}>
        <Child children='haha' />
      </ThemeContext.Provider>
    );
  }
}

export default Parent;
