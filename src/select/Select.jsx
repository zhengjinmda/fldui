import React, { Component } from "react";
import classnames from "classnames";
import propTypes from "prop-types";
import { isNodeFound } from "./isNodeFound";
import ReactDOM from "react-dom";
import classNames from "classnames";
import onclickoutside from "react-onclickoutside";
import { CSSTransition } from "react-transition-group";
import "./styles/fld-select.less";

class Select extends Component {
  constructor(props) {
    super(props);
    let value, label;
    this.selectRef = React.createRef();
    if ("value" in props) {
      value = props.value;
    } else {
      value = props.defaultValue;
    }
    if (props.children === undefined && props.options) {
      props.options.forEach((item) => {
        if (item.value === value) {
          label = item.label;
        }
      });
    } else {
      label = Select.getLabelByValue(props.children, value);
    }

    this.state = {
      open: false,
      value,
      label,
      options: [],
    };
  }

  static getDerivedStateFromProps(props, state) {
    let value, label;
    let options = [];
    if (props !== undefined) {
      if ("value" in props) {
        if (props.value !== value) {
          value = props.value;
        }
      } else {
        value = state.value;
      }
    }
    if (props.children === undefined && props.options) {
      options = props.options;
      props.options.forEach((item) => {
        if (item.value === value) {
          label = item.label;
        }
      });
    } else {
      label = Select.getLabelByValue(props.children, value);
      options = Select.getOptions(props.children);
    }
    return {
      value,
      label,
      options,
    };
  }

  componentDidMount() {
    if (this.props.children === undefined) {
      this.setState({ options: this.props.options });
    } else {
      let el = Select.getOptions(this.props.children);
      this.setState({
        options: el,
      });
    }
  }

  // 获取 options
  static getOptions(children) {
    let el = [];
    React.Children.forEach(children, (child) => {
      let value = child.props.value;
      let label = child.props.children;
      el.push({
        value: value,
        label: label,
      });
    });
    return el;
  }

  // 通过索引 value 获得 label
  static getLabelByValue(children, value) {
    if (value === undefined) {
      return null;
    }

    let label = null;
    React.Children.forEach(children, (child) => {
      if (value === child.props.value) {
        label = child.props.children;
      }
    });

    return label;
  }

  // 点击 input 组件时 根据变量 open 来决定下拉框是否展示
  handleClick = () => {
    if (this.props.disabled) return false;
    this.setState({
      open: !this.state.open,
    });
  };

  getDropdownItem = (item) => {
    if ("onChange" in this.props) {
      this.props.onChange(item);
    }
    this.setState({
      open: !this.state.open,
      value: item.value,
      label: item.label,
    });
  };

  handleClickOutside = () => {
    if (this.props.disabled) return;
    this.setState({
      open: false,
    });
  };

  render() {
    const fldSelect = classnames({
      "fld-select": true,
      "fld-select_disabled": this.props.disabled,
    });
    const fldSelectDropdown = classnames({
      "fld-select_dropdown": true,
      "fld-select_dropdown__open": this.state.open,
    });
    const fldSelectDropdownWrapAnimation = classNames({
      "fld-select_dropdownWrap__animation": true,
      notice: true,
    });
    return (
      <>
        <div
          style={this.props.style}
          className={fldSelect}
          ref={this.selectRef}
        >
          <div>
            {/* 模拟input 框 */}
            <div className="fld-select_input" onClick={this.handleClick}>
              {this.state.label}
              <i
                className={`iconfont icon-jiantou-copy-copy fld-select_arrows ${
                  this.state.open ? "fld-select_arrows__animationIn" : "fld-select_arrows__animationOut"
                }`}
              ></i>
            </div>
            {/* 下拉框 */}
            <CSSTransition
              in={this.state.open}
              addEndListener={(node, done) => {
                if (!this.state.open) {
                  done();
                }
              }}
              classNames={fldSelectDropdownWrapAnimation}
            >
              <div className={fldSelectDropdown} style={this.props.style}>
                <div className="fld-select_dropdownWrap">
                  <ul className="fld-select_dropdownList">
                    {this.state.options !== undefined &&
                      this.state.options.map((item) => {
                        const fldSelectDropdownItem = classnames({
                          "fld-select_dropdownItem": true,
                          "fld-select_dropdownItem__select":
                            this.state.value === item.value,
                        });
                        return (
                          <li
                            onClick={() => this.getDropdownItem(item)}
                            className={fldSelectDropdownItem}
                            key={item.value}
                          >
                            {item.label}
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
            </CSSTransition>
          </div>
        </div>
      </>
    );
  }
}

Select.defaultProps = {
  disabled: false,
  style: {
    width: 160,
  },
};

Select.propTypes = {
  defaultValue: propTypes.oneOfType([propTypes.string, propTypes.number]),
  value: propTypes.oneOfType([propTypes.number, propTypes.string]),
  disabled: propTypes.bool,
  style: propTypes.object,
  onChange: propTypes.func,
};

export default onclickoutside(Select);
