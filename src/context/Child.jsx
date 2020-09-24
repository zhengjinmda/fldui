import React, { Component } from "react";
import ThemeContext from "./ThemeContext";

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.context);
    return (
      <ThemeContext.Consumer>
        {(context) => (
          <h1 style={{ background: context.background, color: context.color }}>
            {this.props.children}
          </h1>
        )}
      </ThemeContext.Consumer>
    );
  }
}
Child.contextType = ThemeContext;
export default Child;
