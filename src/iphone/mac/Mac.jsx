/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import iMacImg from '../styles/images/iMac.png';
import '../styles/mac.less';

class Mac extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openPageAnimation: false,
    };
  }

  componentDidMount() {
    this.setState({
      openPageAnimation: true,
    });
  }

  handleRedirectClick = () => {
    console.log(1)
    this.props.history.push('/shop/iMac/21.5-英寸')
  }

  render() {
    const fldMacChapter = classNames({
      'fldMac-chapter': true,
      'fldMac-chapter_fadeIn': this.state.openPageAnimation,
    });

    const fldMacTips = classNames({
      'fldMac-tips': true,
      'fldMac-tips_animation': this.state.openPageAnimation,
    });

    return (
      <>
        <div className={fldMacChapter}>
          <ul className="fldMac-chapter_list">
            <li className="fldMac-chapter_list__item">
              <i className="iconfont icon-MacBookPro fldMac-chapter_list__item___devicePictures" />
              <p className="fldMac-chapter_list__item___deviceTitle">MacBook Air</p>
            </li>
            <li className="fldMac-chapter_list__item">
              <i className="iconfont icon-macOS fldMac-chapter_list__item___devicePictures" />
              <p className="fldMac-chapter_list__item___deviceTitle">MacBook Pro 13 英寸</p>
            </li>
            <li className="fldMac-chapter_list__item">
              <i className="iconfont icon-MacBookPro fldMac-chapter_list__item___devicePictures" />
              <p className="fldMac-chapter_list__item___deviceTitle">MacBook Pro 16 英寸</p>
            </li>
            <li className="fldMac-chapter_list__item">
              <i className="iconfont icon-Mac fldMac-chapter_list__item___devicePictures" />
              <p className="fldMac-chapter_list__item___deviceTitle">MacBook Pro 19 英寸</p>
            </li>
            <li className="fldMac-chapter_list__item">
              <i className="iconfont icon-MacBookPro fldMac-chapter_list__item___devicePictures" />
              <p className="fldMac-chapter_list__item___deviceTitle">iMac</p>
            </li>
            <li className="fldMac-chapter_list__item">
              <i className="iconfont icon-Mac fldMac-chapter_list__item___devicePictures" />
              <p className="fldMac-chapter_list__item___deviceTitle">iMac Pro</p>
            </li>
            <li className="fldMac-chapter_list__item">
              <i className="iconfont icon-MacBookPro fldMac-chapter_list__item___devicePictures" />
              <p className="fldMac-chapter_list__item___deviceTitle">Mac Pro</p>
            </li>
            <li className="fldMac-chapter_list__item">
              <i className="iconfont icon-Mac fldMac-chapter_list__item___devicePictures" />
              <p className="fldMac-chapter_list__item___deviceTitle">Mac mini</p>
            </li>
            <li className="fldMac-chapter_list__item">
              <i className="iconfont icon-macOS fldMac-chapter_list__item___devicePictures" />
              <p className="fldMac-chapter_list__item___deviceTitle">mac OS</p>
            </li>
            <li className="fldMac-chapter_list__item">
              <i className="iconfont icon-MacBookPro fldMac-chapter_list__item___devicePictures" />
              <p className="fldMac-chapter_list__item___deviceTitle">配件</p>
            </li>
          </ul>
        </div>
        <div className={fldMacTips}>
          <p className="fldMac-tips_content">
            于教育商店选购 MacBook Air 和 13 英寸 MacBook Pro 可享受优惠，并有 AirPods 搭配其中*。以教育优惠价格
            <Link className="fldMac-link" to="/">
              <span>选购</span>
            </Link>
          </p>
        </div>
        <div className="fldMac-iMac">
          <div className="fldMac-iMac_leftContent">
            <h3 className="fldMac-iMac_leftContent__new">新款</h3>
            <h3 className="fldMac-iMac_leftContent__size">27 英寸</h3>
            <h2 className="fldMac-iMac_leftContent__title">iMac</h2>
            <h3 className="fldMac-iMac_leftContent__subhead">一体式，多面手。</h3>
            <button onClick={this.handleRedirectClick} className="fldMac-iMac_leftContent__buyButton">购买</button>
            <p className="fldMac-iMac_leftContent__know">
              进一步了解
              <i className="iconfont icon-youjiantou" />
            </p>
          </div>
          <div>
            <img src={iMacImg} />
          </div>
        </div>
      </>
    );
  }
}

export default Mac;
