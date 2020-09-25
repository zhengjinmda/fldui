/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import watchURL from '../styles/images/watch.png';
import iPadURL from '../styles/images/ipad.png';
import watchSeURL from '../styles/images/watchSE.png';
import newIPadImg from '../styles/images/newIpad.png';
import watchOSURL from '../styles/images/watchOS.png';
import '../styles/HomePage.less';

class HomePage extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="fldHomePage-tipsBar">
          <p>
            <Link className="fldHomePage-link" to="/shop/">
              在线选购,
            </Link>
            享受免费送货、Specialist 专家支持、免息分期等服务。
          </p>
        </div>
        <div className="fldHomePage-watch">
          <div>
            <h2 className="fldHomePage-watch_title">
              <i class="iconfont icon-apple1 fldHomePage-watch_title__icon"></i>WATCH<p>SERIES 6</p>
            </h2>
            <h3 className="fldHomePage-watch_subhead">健康的未来，现在带上。</h3>
            <p className="fldHomePage-watch_ctaLink">
              <Link className="fldHomePage-link" to="https://www.apple.com.cn/apple-watch-series-6/">
                进一步了解
              </Link>
              <i class="iconfont icon-youjiantou"></i>
              <span style={{ marginLeft: '35px' }}></span>
              <Link className="fldHomePage-link" to="https://www.apple.com.cn/apple-watch-series-6/">
                购买
              </Link>
              <i class="iconfont icon-youjiantou"></i>
            </p>
          </div>
          <div className="fldHomePage-watch_watchImg">
            <img src={watchURL} />
          </div>
        </div>
        <div className="fldHomePage-iPad">
          <div>
            <p className="fldHomePage-iPad_advanceSale">10月发售</p>
            <h2 className="fldHomePage-iPad_title">iPad Air</h2>
            <h3 className="fldHomePage-iPad_subhead">凭实力出彩。</h3>
            <p className="fldHomePage-watch_ctaLink">
              <Link className="fldHomePage-link" to="https://www.apple.com.cn/apple-watch-series-6/">
                进一步了解
              </Link>
              <i class="iconfont icon-youjiantou"></i>
              <span className="fldHomePage-wingBlank"></span>
              <Link className="fldHomePage-link" to="https://www.apple.com.cn/apple-watch-series-6/">
                购买
              </Link>
              <i class="iconfont icon-youjiantou"></i>
            </p>
          </div>
          <div className="fldHomePage-iPad_iPadImg">
            <img src={iPadURL} />
          </div>
        </div>
        <div className="fldHomePage-watchSE">
          <div>
            <h2 className="fldHomePage-watchSE_title">
              <i class="iconfont icon-apple1 fldHomePage-watchSE_title__icon"></i>WATCH<p>SE</p>
            </h2>
            <h3 className="fldHomePage-watchSE_subhead">事事拿手，轻松入手。</h3>
            <p className="fldHomePage-watch_ctaLink">
              <Link className="fldHomePage-link" to="https://www.apple.com.cn/apple-watch-series-6/">
                进一步了解
              </Link>
              <i class="iconfont icon-youjiantou"></i>
              <span className="fldHomePage-wingBlank"></span>
              <Link className="fldHomePage-link" to="https://www.apple.com.cn/apple-watch-series-6/">
                购买
              </Link>
              <i class="iconfont icon-youjiantou"></i>
            </p>
          </div>
          <div className="fldHomePage-watchSE_watchSEImg">
            <img src={watchSeURL} />
          </div>
        </div>
        <div className="fldHomePage-squared">
          <div className="fldHomePage-squared_ipad">
            <div className="fldHomePage-squared_ipad__img">
              <img src={newIPadImg} />
            </div>
            <div>
              <p className="fldHomePage-squared_ipad__tip">新款</p>
              <h2 className="fldHomePage-squared_ipad__title">ipad</h2>
              <h3 className="fldHomePage-squared_ipad__subhead">特有本事，特超值。</h3>
              <p className="fldHomePage-squared_ipad__ctaLink">
                <Link className="fldHomePage-link" to="https://www.apple.com.cn/apple-watch-series-6/">
                  进一步了解
                </Link>
                <i className="iconfont icon-youjiantou fldHomePage-squared_ipad__ctaLink___icon"></i>
                <span className="fldHomePage-wingBlank"></span>
                <Link className="fldHomePage-link" to="https://www.apple.com.cn/apple-watch-series-6/">
                  购买
                </Link>
                <i className="iconfont icon-youjiantou fldHomePage-squared_ipad__ctaLink___icon"></i>
              </p>
            </div>
          </div>
          <div className="fldHomePage-squared_watch">
            <div>
              <h2 className="fldHomePage-squared_watch__title">watchOS 7</h2>
              <h3 className="fldHomePage-squared_watch__subhead">感觉一新，如日夜之别。</h3>
              <p className="fldHomePage-squared_ipad__ctaLink">
                <Link className="fldHomePage-link" to="https://www.apple.com.cn/apple-watch-series-6/">
                  进一步了解
                </Link>
                <i className="iconfont icon-youjiantou fldHomePage-squared_ipad__ctaLink___icon"></i>
              </p>
            </div>
            <div>
              <img src={watchOSURL} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default HomePage;
