import React, { Component } from "react";
import classnames from "classnames";
import propTypes from "prop-types";
import "./styles/fld-select.less";
import classNames from 'classnames';
import onclickoutside from "react-onclickoutside";
import { CSSTransition } from "react-transition-group";

class Select extends Component {
  constructor(props) {
    super(props);
    let value;
    if ("value" in props) {
      value = props.value;
    } else {
      value = props.defaultValue;
    }
    const label = this.getLabelByValue(props.children, value);

    this.state = {
      open: false,
      value,
      label,
    };
  }

  componentWillReceiveProps(nextProps) {
    let value;
    if ("value" in nextProps) {
      value = nextProps.value;
    } else {
      value = this.state.value;
    }
    const label = this.getLabelByValue(nextProps.children, value);
    this.setState({
      value,
      label,
    });
  }

  getLabelByValue(children, value) {
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

  handleClick = () => {
    if (this.props.disabled) return false;
    this.setState({
      open: !this.state.open,
    });
  };

  getDropdownItem = (item) => {

    if('onChange' in this.props) {
      this.props.onChange(item)
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

  getMenus() {
    let el = [];
    React.Children.forEach(this.props.children, (child) => {
      let value = child.props.value;
      let label = child.props.children;
      el.push({
        value: value,
        label: label,
      });
    });
    return el;
  }

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
    const fldSelectArrowsAnimation = classNames({
      "fld-select_arrows__animation": true,
      notice: true,
    })

    let el = this.getMenus();
    return (
      <>
        <div style={this.props.style} className={fldSelect}>
          <div>
            <div className="fld-select_input" onClick={this.handleClick}>
              {this.state.label}
              <CSSTransition
                in={this.state.open}
                addEndListener={(node, done) => {
                  if(!this.state.open) {
                    done()
                  }
                }}
                classNames={fldSelectArrowsAnimation}
              >
              <i className='iconfont icon-jiantou-copy-copy fld-select_arrows' ></i>
              </CSSTransition>
            </div>
            <CSSTransition
              in={this.state.open}
              addEndListener={(node, done) => {
                if(!this.state.open) {
                  done()
                }
              }}
              classNames={fldSelectDropdownWrapAnimation}
            >
              <div className={fldSelectDropdown} style={this.props.style}>
                <div className="fld-select_dropdownWrap">
                  <ul className="fld-select_dropdownList">
                    {el.map((item) => {
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
