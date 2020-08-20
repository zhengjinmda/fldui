import React, { useCallback } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const Button = (props) => {
  const btnClassName = classnames({
    "fld-btn": true,
    [`fld-btn_${props.type}`]: true,
    [`fld-btn_${props.size}`]: true,
    "fld-btn_disabled": props.disabled,
    "fld-btn_circle": props.circle,
  });

  const handleClick = useCallback(() => {
    if (!props.onClick) return;
    props.onClick();
  }, []);

  return (
    <button className={btnClassName} onClick={handleClick}>
      {props.children}
    </button>
  );
};

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
