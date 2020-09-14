import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import "./test.css";
import classNames from "classnames";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      hidden: false,
    };
  }

  render() {
    const arrow = classNames({
      "content": true,
      "show": this.state.open,
      "hidden": this.state.hidden,
    })
    const sild = classNames({
      "slide-content": true,
      "slide-up": this.state.open,
      "slide-down": this.state.hidden,
    })
    return (
      <>
        <button
          onClick={() => {
            this.setState({
              open: !this.state.open,
              hidden: this.state.open,
            });
          }}
        >
          显示/隐藏
        </button>

        <div>
          <div className={arrow}>
            hehe
          </div>
        </div>

        <div className={sild}>
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
        <div className={sild}>
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
