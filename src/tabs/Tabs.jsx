import React, { Component } from 'react';
import propType from 'prop-types';
import classNames from 'classnames';

import './tabs.less';

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.tabsRef = React.createRef()
    this.barRef = React.createRef()
    this.contentRef = React.createRef()
    this.state = {
      active: props.active || props.defaultActive,
      length: props.children.length || 1
    };
  }

  componentDidMount() {
    
  }

  render() {
    const contents = this.renderTabs();
    return (
      <div className={classNames('fldTabs')}>
        <div className={classNames('fldTabs-header')}>
          <div className={classNames('fldTabs-list')} ref={this.tabsRef}>
            {contents[0]}
          </div>
          <div className={classNames('fldTabs-bar')} ref={this.barRef} />
        </div>
        <div className={classNames('fldTabs-content')} ref={this.contentRef}>
          <div className={classNames('fldTabs-wrapper')} ref={this.wrapperRef}>
            {contents[1]}
          </div>
        </div>
      </div>
    );
  }
}

Tabs.defaultProps = {
  defaultActive: 0,
};

Tabs.propType = {
  defaultActive: propType.number,
  active: propType.number,
  onChange: propType.func,
};

export default Tabs;
