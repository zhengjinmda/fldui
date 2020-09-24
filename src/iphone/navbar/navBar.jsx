import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import SearchView from './SearchView';
import './styles/navbar.less';

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
      'fld-iPhoneNavbar': true,
      'fld-iPhoneNavbar_shadow': this.state.isShow,
    });

    const fldIPhoneNavbarContentListItem = classNames({
      'fld-iPhoneNavbar_content__list___item': true,
      'fld-iPhoneNavbar_content__list___item____fadeOut': this.state.isShow,
      'fld-iPhoneNavbar_content__list___item____fadeIn': this.state.slideRight,
    });

    const fldIPhoneNavbarContentList = classNames({
      'fld-iPhoneNavbar_content__list': true,
      'fld-iPhoneNavbar_content__list___slideRight': this.state.slideRight,
    });

    return (
      <>
        <div className={fldIPoneNavBar}>
          <div className="fld-iPhoneNavbar_content">
            <ul className={fldIPhoneNavbarContentList}>
              <li className={fldIPhoneNavbarContentListItem}>
                <Link className="fld-iPhoneNavbar_link" to="/">
                  <i class="iconfont icon-apple1 fld-iPhoneNavbar_content__list___icon"></i>
                </Link>
              </li>
              <li className={fldIPhoneNavbarContentListItem}>
                <Link className="fld-iPhoneNavbar_link" to="/mac/">
                  <span>Mac</span>
                </Link>
              </li>
              <li className={fldIPhoneNavbarContentListItem}>
                <Link className="fld-iPhoneNavbar_link" to="/iPad/">
                  <span>iPad</span>
                </Link>
              </li>
              <li className={fldIPhoneNavbarContentListItem}>
                <Link className="fld-iPhoneNavbar_link" to="/iPhone/">
                  <span>iPhone</span>
                </Link>
              </li>
              <li className={fldIPhoneNavbarContentListItem}>
                <Link className="fld-iPhoneNavbar_link" to="/Watch/">
                  <span>Watch</span>
                </Link>
              </li>
              <li className={fldIPhoneNavbarContentListItem}>
                <Link className="fld-iPhoneNavbar_link" to="/Music/">
                  <span>Music</span>
                </Link>
              </li>
              <li className={fldIPhoneNavbarContentListItem}>
                <Link className="fld-iPhoneNavbar_link" to="/support/">
                  <span>技术支持</span>
                </Link>
              </li>
              <li className={fldIPhoneNavbarContentListItem} onClick={this.handleClick}>
                <i class="iconfont icon-search fld-iPhoneNavbar_content__list___icon"></i>
              </li>
              <li className={fldIPhoneNavbarContentListItem}>
                <i class="iconfont icon-buoumaotubiao01 fld-iPhoneNavbar_content__list___icon"></i>
              </li>
            </ul>
          </div>
        </div>
        <SearchView isShow={this.state.isShow} cancelQuery={this.cancelQuery} />
      </>
    );
  }
}

export default PhoneNavBar;
