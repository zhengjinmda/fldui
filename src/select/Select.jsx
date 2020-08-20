import React, { Component } from "react";
import "./styles/fld-select.less";

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="fld-select">
          <div>
            <div className="fld-select_input">123</div>
            <i className="iconfont  icon-jiantou-copy-copy fld-select_position"></i>
          </div>
        </div>
      </>
    );
  }
}

export default Select;
