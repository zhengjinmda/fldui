import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./styles/fld-button.less";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleClick = () => {
    if (!this.props.onClick) return;
    this.props.onClick();
  };
  render() {
    const btnClassName = classnames({
      "fld-btn": true,
      [`fld-btn_${this.props.type}`]: true,
      [`fld-btn_${this.props.size}`]: true,
      "fld-btn_disabled": this.props.disabled,
      "fld-btn_circle": this.props.circle,
    });
    return (
      <button className={btnClassName} onClick={this.handleClick}>
        {this.props.icon ? (
          <span className={`iconfont fld-btn_icon ${this.props.icon}`} />
        ) : null}
        {this.props.children}
      </button>
    );
  }
}

Button.defaultProps = {
  children: "Button",
  type: "primary",
  size: "default",
  disabled: false,
  circle: false,
  icon: "",
};

Button.propTypes = {
  children: PropTypes.string,
  type: PropTypes.oneOf(["primary", "success", "warning", "danger", "info"]),
  size: PropTypes.oneOf(["default", "small", "large"]),
  disabled: PropTypes.bool,
  circle: PropTypes.bool,
  icon: PropTypes.string,
};

export default Button;
