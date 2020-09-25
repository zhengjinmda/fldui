import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import SearchView from './SearchView';
import '../styles/navbar.less';

class PhoneNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      slideRight: false,
    };
  }

  handleClick = () => {
    this.setState({
      isShow: true,
      slideRight: false,
    });
  };

  cancelQuery = () => {
    this.setState({
      isShow: false,
      slideRight: true,
    });
  };

  render() {
    const fldIPoneNavBar = classNames({
      'fldNavbar': true,
    });

    const fldIPhoneNavbarContentListItem = classNames({
      'fldNavbar-content_list__item': true,
      'fldNavbar-content_list__item___fadeOut': this.state.isShow,
      'fldNavbar-content_list__item___fadeIn': this.state.slideRight,
    });

    const fldIPhoneNavbarContentList = classNames({
      'fldNavbar-content_list': true,
      'fldNavbar-content_list__slideRight': this.state.slideRight,
    });

    const fldNavBarShadow = classNames({
      'fldNavbar-shadow': true,
      'fldNavbar-shadow_fadeIn': this.state.isShow,
      'fldNavbar-shadow_fadeOut': this.state.slideRight,
    });

    return (
      <>
        <div className={fldIPoneNavBar}>
          <div className="fldNavbar-content">
            <ul className={fldIPhoneNavbarContentList}>
              <li className={fldIPhoneNavbarContentListItem}>
                <Link className="fldNavbar-link" to="/">
                  <i class="iconfont icon-apple1 fldNavbar-content_list__icon"></i>
                </Link>
              </li>
              <li className={fldIPhoneNavbarContentListItem}>
                <Link className="fldNavbar-link" to="/mac/">
                  <span>Mac</span>
                </Link>
              </li>
              <li className={fldIPhoneNavbarContentListItem}>
                <Link className="fldNavbar-link" to="/iPad/">
                  <span>iPad</span>
                </Link>
              </li>
              <li className={fldIPhoneNavbarContentListItem}>
                <Link className="fldNavbar-link" to="/iPhone/">
                  <span>iPhone</span>
                </Link>
              </li>
              <li className={fldIPhoneNavbarContentListItem}>
                <Link className="fldNavbar-link" to="/Watch/">
                  <span>Watch</span>
                </Link>
              </li>
              <li className={fldIPhoneNavbarContentListItem}>
                <Link className="fldNavbar-link" to="/Music/">
                  <span>Music</span>
                </Link>
              </li>
              <li className={fldIPhoneNavbarContentListItem}>
                <Link className="fldNavbar-link" to="/support/">
                  <span>技术支持</span>
                </Link>
              </li>
              <li className={fldIPhoneNavbarContentListItem} onClick={this.handleClick}>
                <i class="iconfont icon-search fldNavbar-content_list__icon"></i>
              </li>
              <li className={fldIPhoneNavbarContentListItem}>
                <i class="iconfont icon-buoumaotubiao01 fldNavbar-content_list__icon"></i>
              </li>
            </ul>
          </div>
        </div>
        {this.state.isShow && <SearchView isShow={this.state.isShow} cancelQuery={this.cancelQuery} />}
        <div className={fldNavBarShadow} />
      </>
    );
  }
}

export default PhoneNavBar;
