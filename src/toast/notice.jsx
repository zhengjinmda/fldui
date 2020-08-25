import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

class Notice extends Component {
  render() {
    const { type, content } = this.props;
    const fldToastContent = classNames({
      "fld-toast_content": true,
      [`fld-toast_content__${type}`]: true,
    });
    const fldToastIcon = classNames({
      "fld-toast_icon": true,
    });
    const icons = {
      success: "icon-success_toast",
      error: "icon-failure_toast",
      warning: "icon-alert_toast",
      info: "icon-big",
      loading: "icon-loading",
    };
    return (
      <div className={fldToastContent}>
        <i className={`iconfont ${icons[type]} ${fldToastIcon}`}></i>
        <span>{content}</span>
      </div>
    );
  }
}

Notice.defaultProps = {
  content: "please write something",
};

Notice.propTypes = {
  content: PropTypes.string,
  type: PropTypes.oneOf(["success", "error", "info", "warning", "loading"]),
};

export default Notice;
