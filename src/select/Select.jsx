import React, { Component } from "react";
import classnames from "classnames";
import propTypes from "prop-types";
import onclickoutside from "react-onclickoutside";
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
      hidden: false,
      value,
      label,
      options: [],
    };
  }

  static getDerivedStateFromProps(props, state) {
    let value, label;
    let options = [];
    if ("value" in props) {
      if (props.value !== value) {
        value = props.value;
      }
    } else {
      value = state.value;
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

    this.setState(() => {
      if (this.state.open) {
        return {
          open: false,
          hidden: true,
        };
      } else {
        return {
          open: true,
          hidden: false,
        };
      }
    });
  };

  getDropdownItem = (item) => {
    if ("onChange" in this.props) {
      this.props.onChange(item);
    }

    this.setState(() => {
      if (this.state.open) {
        return {
          open: false,
          hidden: true,
          value: item.value,
          label: item.label,
        };
      } else {
        return {
          open: true,
          hidden: false,
          value: item.value,
          label: item.label,
        };
      }
    });
  };

  handleClickOutside = () => {
    if (this.props.disabled) return;
    this.setState(() => {
      if (this.state.open) {
        return {
          open: false,
          hidden: true,
        };
      }
    });
  };

  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.value !== this.state.value) {
      // return false
    }
    return true
  }

  render() {
    const fldSelect = classnames({
      "fld-select": true,
      "fld-select_disabled": this.props.disabled,
    });
    const fldSelectDropdown = classnames({
      "fld-select_dropdown": true,
      "fld-select_dropdownWrap__animateSlideUp": this.state.open,
      "fld-select_dropdownWrap__animateSlideDown": this.state.hidden,
    });
    const fldSelectArrow = classnames({
      "iconfont icon-jiantou-copy-copy fld-select_arrows": true,
      "fld-select_arrows__animationIn": this.state.open,
      "fld-select_arrows__animationOut": this.state.hidden,
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
              <i className={fldSelectArrow}></i>
            </div>
            {/* 下拉框 */}
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
