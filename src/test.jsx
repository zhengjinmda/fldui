import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import "./test.css";
import classNames from "classnames";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  render() {
    return (
      <>
        <button
          onClick={() => {
            this.setState({ open: !this.state.open });
          }}
        >
          显示/隐藏
        </button>

        <div>
          <div className={this.state.open ? "show content" : "hidden content"}>
            hehe
          </div>
        </div>

        <div className="fld-test_content">
          <ul>
            <li>hehe</li>
            <li>hehe</li>
            <li>hehe</li>
            <li>hehe</li>
            <li>hehe</li>
            <li>hehe</li>
            <li>hehe</li>
            <li>hehe</li>
            <li>hehe</li>
            <li>hehe</li>
          </ul>
        </div>

        <div className={this.state.open ? "slide-up slide-content" : "slide-down slide-content"}>
          <ul>
            <li>hehe</li>
            <li>hehe</li>
            <li>hehe</li>
            <li>hehe</li>
            <li>hehe</li>
            <li>hehe</li>
            <li>hehe</li>
            <li>hehe</li>
            <li>hehe</li>
            <li>hehe</li>
          </ul>
        </div>
      </>
    );
  }
}

export default App;
