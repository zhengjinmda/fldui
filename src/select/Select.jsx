import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import "./styles/fld-select.less";
import onclickoutside from "react-onclickoutside";

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      value: this.props.inputValue.value,
      label: this.props.inputValue.label,
    };
  }

  handleClick = () => {
    if (this.props.disabled) return;
    this.setState({
      open: !this.state.open,
    });
  };

  getDropdownItem = (item) => {
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

    return (
      <>
        <div className={fldSelect}>
          <div>
            <div className="fld-select_input" onClick={this.handleClick}>
              {this.state.label}
              <i className="iconfont icon-jiantou-copy-copy fld-select_position"></i>
            </div>
            <div className={fldSelectDropdown}>
              <div className="fld-select_dropdownWrap">
                <ul className="fld-select_dropdownList">
                  {this.props.dropdownList.map((item) => {
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
  inputValue: {},
  defaultValue: {},
  value: {},
  dropdownList: [
    { value: "选项1", label: "jack" },
    { value: "选项2", label: "lucy" },
    { value: "选项3", label: "disabled" },
    { value: "选项4", label: "tom" },
  ],
  disabled: false,
};

Select.propTypes = {
  inputValue: PropTypes.object,
  disabled: PropTypes.bool
};

export default onclickoutside(Select, Select.handleClickOutside);
