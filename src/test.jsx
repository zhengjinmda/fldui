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
    const fldToastAnimation = classNames({
      "fld-test_animation": true,
      notice: true,
    });
    const fldTestAnimation = classNames({
      animation: true,
      notice: true,
    });
    return (
      <>
        <div
          onClick={() => {
            console.log(this.state.open);
            this.setState({ open: !this.state.open });
          }}
        >
          hehe
        </div>
        <div>
          <div className={this.state.open ? "show content" : "hidden content"}>hehe</div>
        </div>
        <CSSTransition
          in={this.state.open}
          // addEndListener={(node, done) => {
          //   if(!this.state.open) {
          //     done()
          //   }
          // }}
          timeout={1000}
          classNames={fldTestAnimation}
        >
          <div className="fld-test_content">hehe</div>
        </CSSTransition>
        <CSSTransition
          in={this.state.open}
          timeout={20000}
          classNames={fldToastAnimation}
        >
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
        </CSSTransition>
      </>
    );
  }
}

export default App;
