import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import classNames from 'classnames';
import IMacPro from './IMacPro';
import IMacMini from './IMacMini';

import '../styles/iMac.less';

class IMac extends Component {
  constructor(props) {
    super(props);

    const pathnameList = this.props.location.pathname.split('/');

    this.state = {
      isCeiling: false,
      isChecked: true,
      pathname: pathnameList[pathnameList.length - 1],
    };
  }

  componentDidMount() {
    if (this.state.pathname === '21.5-英寸') {
      this.setState({
        isChecked: true,
      });
    } else {
      this.setState({
        isChecked: false,
      });
    }

    document.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  //吸顶效果 根据离窗口顶部高度判断是否需要吸顶
  handleScroll = () => {
    let h = window.scrollY;
    if (h > 212) {
      this.setState({
        isScrollTop: false,
        isCeiling: true,
      });
    } else {
      this.setState({
        isCeiling: false,
      });
    }
  };

  // 根据路由改变 改变menu样式
  handleSelectClick = (size) => {
    this.setState(
      {
        pathname: size,
      },
      () => {
        if (this.state.pathname === '21.5-英寸') {
          this.setState({
            isChecked: true,
          });
        } else {
          this.setState({
            isChecked: false,
          });
        }
      },
    );
  };

  render() {
    const fldIMacContentMenu = classNames({
      'fldIMac-content_menu': true,
      'fldIMac-content_menu__fixed': this.state.isCeiling,
    });

    const fldIMacContentMenuDetail = classNames({
      'fldIMac-content_menu__fixedMargin': this.state.isCeiling,
    });

    const fldIMacContentMenuItemSmall = classNames({
      'fldIMac-content_menu__item': true,
      'fldIMac-content_menu__item___highLight': this.state.isChecked,
    });

    const fldIMacContentMenuItemPro = classNames({
      'fldIMac-content_menu__item': true,
      'fldIMac-content_menu__item___highLight': !this.state.isChecked,
    });

    return (
      <>
        <div className="fldIMac-title">
          <div className="fldIMac-title_content">
            <p className="fldIMac-title_content__left">iMac</p>
            <div className="fldIMac-title_content__right">
              <p className="fldIMac-title_content__right___item">概览</p>
              <p className="fldIMac-title_content__right___item">macOS</p>
              <p className="fldIMac-title_content__right___item">技术规格</p>
            </div>
          </div>
        </div>
        <div className="fldIMac-tips">
          <p className="fldIMac-tips_content">符合条件的用户可选择灵活的分期付款方式。</p>
        </div>
        <div className="fldIMac-content">
          <div className="fldIMac-content_title">选择你的新 iMac。</div>
          <Router>
            <div className={fldIMacContentMenu}>
              <Link
                onClick={() => this.handleSelectClick('21.5-英寸')}
                to="/shop/iMac/21.5-英寸"
                className="fldIMac-content_menu__link"
              >
                <div className={fldIMacContentMenuItemSmall}>
                  <p className="fldIMac-content_menu__item___new"></p>
                  <p className="fldIMac-content_menu__item___size">21.5英寸</p>
                </div>
              </Link>
              <Link
                onClick={() => this.handleSelectClick('27英寸')}
                to="/shop/iMac/27英寸"
                className="fldIMac-content_menu__link"
              >
                <div className={fldIMacContentMenuItemPro}>
                  <p className="fldIMac-content_menu__item___new">新款</p>
                  <p className="fldIMac-content_menu__item___size">27英寸</p>
                </div>
              </Link>
            </div>
            <div className={fldIMacContentMenuDetail}>
              <Route path="/shop/iMac/21.5-英寸" exact component={IMacMini} />
              <Route path="/shop/iMac/27英寸" exact component={IMacPro} />
            </div>
          </Router>
        </div>
      </>
    );
  }
}

export default IMac;
