/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import watchURL from '../images/watch.png';
import iPadURL from '../images/ipad.png';
import watchSeURL from '../images/watchSE.png';
import newIPadImg from '../images/newIpad.png';
import watchOSURL from '../images/watchOS.png';
import './HomePage.less';

class HomePage extends Component {
  state = {};
  render() {
    return (
      <>
        <div>
          <div className="fld-iPhoneHomePage_watch">
            <p className="fld-iPhoneHomePage_watch__sectionContent">
              <Link className="fld-iPhoneHomePage_watch__link" to="/shop/">
                在线选购,
              </Link>
              享受免费送货、Specialist 专家支持、免息分期等服务。
            </p>
            <div>
              <h2 className="fld-iPhoneHomePage_watch__title">
                <i class="iconfont icon-apple1 fld-iPhoneHomePage_watch__title___icon"></i>WATCH<p>SERIES 6</p>
              </h2>
              <h3 className="fld-iPhoneHomePage_watch__subhead">健康的未来，现在带上。</h3>
              <p className="fld-iPhoneHomePage_watch__ctaLink">
                <Link className="fld-iPhoneHomePage_watch__link" to="https://www.apple.com.cn/apple-watch-series-6/">
                  进一步了解
                </Link>
                <i class="iconfont icon-youjiantou"></i>
                <span style={{ marginLeft: '35px' }}></span>
                <Link className="fld-iPhoneHomePage_watch__link" to="https://www.apple.com.cn/apple-watch-series-6/">
                  购买
                </Link>
                <i class="iconfont icon-youjiantou"></i>
              </p>
            </div>
            <div className="fld-iPhoneHomePage_watch__watchImg">
              <img src={watchURL} />
            </div>
          </div>
          <div className="fld-iPhoneHomePage_iPad">
            <div>
              <p className="fld-iPhoneHomePage_iPad__advanceSale">10月发售</p>
              <h2 className="fld-iPhoneHomePage_iPad__title">iPad Air</h2>
              <h3 className="fld-iPhoneHomePage_iPad__subhead">凭实力出彩。</h3>
              <p className="fld-iPhoneHomePage_watch__ctaLink">
                <Link className="fld-iPhoneHomePage_watch__link" to="https://www.apple.com.cn/apple-watch-series-6/">
                  进一步了解
                </Link>
                <i class="iconfont icon-youjiantou"></i>
                <span style={{ marginLeft: '35px' }}></span>
                <Link className="fld-iPhoneHomePage_watch__link" to="https://www.apple.com.cn/apple-watch-series-6/">
                  购买
                </Link>
                <i class="iconfont icon-youjiantou"></i>
              </p>
            </div>
            <div className="fld-iPhoneHomePage_iPad__iPadImg">
              <img src={iPadURL} />
            </div>
          </div>
          <div className="fld-iPhoneHomePage_watchSE">
            <div>
              <h2 className="fld-iPhoneHomePage_watchSE__title">
                <i class="iconfont icon-apple1 fld-iPhoneHomePage_watchSE__title___icon"></i>WATCH<p>SE</p>
              </h2>
              <h3 className="fld-iPhoneHomePage_watchSE__subhead">事事拿手，轻松入手。</h3>
              <p className="fld-iPhoneHomePage_watch__ctaLink">
                <Link className="fld-iPhoneHomePage_watch__link" to="https://www.apple.com.cn/apple-watch-series-6/">
                  进一步了解
                </Link>
                <i class="iconfont icon-youjiantou"></i>
                <span style={{ marginLeft: '35px' }}></span>
                <Link className="fld-iPhoneHomePage_watch__link" to="https://www.apple.com.cn/apple-watch-series-6/">
                  购买
                </Link>
                <i class="iconfont icon-youjiantou"></i>
              </p>
            </div>
            <div className="fld-iPhoneHomePage_watchSE__watchSEImg">
              <img src={watchSeURL} />
            </div>
          </div>
          <div className="fld-iPhoneHomePage_squared">
            <div className="fld-iPhoneHomePage_squared__ipad">
              <div className="fld-iPhoneHomePage_squared__ipad___img">
                <img src={newIPadImg} />
              </div>
              <div>
                <p className="fld-iPhoneHomePage_squared__ipad___tip">新款</p>
                <h2 className="fld-iPhoneHomePage_squared__ipad___title">ipad</h2>
                <h3 className="fld-iPhoneHomePage_squared__ipad___subhead">特有本事，特超值。</h3>
                <p className="fld-iPhoneHomePage_squared__ipad___ctaLink">
                  <Link className="fld-iPhoneHomePage_watch__link" to="https://www.apple.com.cn/apple-watch-series-6/">
                    进一步了解
                  </Link>
                  <i className="iconfont icon-youjiantou fld-iPhoneHomePage_squared__ipad___ctaLink____icon"></i>
                  <span style={{ marginLeft: '35px' }}></span>
                  <Link className="fld-iPhoneHomePage_watch__link" to="https://www.apple.com.cn/apple-watch-series-6/">
                    购买
                  </Link>
                  <i className="iconfont icon-youjiantou fld-iPhoneHomePage_squared__ipad___ctaLink____icon"></i>
                </p>
              </div>
            </div>
            <div className="fld-iPhoneHomePage_squared__watch">
              <div>
                <h2 className="fld-iPhoneHomePage_squared__watch___title">watchOS 7</h2>
                <h3 className="fld-iPhoneHomePage_squared__watch___subhead">感觉一新，如日夜之别。</h3>
                <p className="fld-iPhoneHomePage_squared__ipad___ctaLink">
                  <Link className="fld-iPhoneHomePage_watch__link" to="https://www.apple.com.cn/apple-watch-series-6/">
                    进一步了解
                  </Link>
                  <i className="iconfont icon-youjiantou fld-iPhoneHomePage_squared__ipad___ctaLink____icon"></i>
                </p>
              </div>
              <div>
                <img src={watchOSURL} />
              </div>
            </div>
          </div>
        </div>
        <div className="fld-iPhoneHomePage_footer">
          <div className="fld-iPhoneHomePage_footer__content">
            <div className="fld-iPhoneHomePage_footer__content___tips">
              <p>
                1. 免费试用期结束后，每月收费 RMB 10。无需合约。当试用期结束后，会员方案将按月自动续订，直至取消订阅。
              </p>
              <div style={{ height: '9px' }}></div>
              <p>产品到店发售日期，各 Apple Store 零售店可能有所不同。详情请咨询相关零售店。</p>
            </div>
            <div className="fld-iPhoneHomePage_footer__content___directory">
              <div className="fld-iPhoneHomePage_footer__content___directory____column">
                <h3>选购及了解</h3>
                <ul>
                  <li>Mac</li>
                  <li>iPad</li>
                  <li>iPhone</li>
                  <li>Watch</li>
                  <li>AirPods</li>
                  <li>HomePod</li>
                  <li>iPod touch</li>
                  <li>配件</li>
                  <li>App Store 充值卡</li>
                </ul>
              </div>
              <div className="fld-iPhoneHomePage_footer__content___directory____column">
                <h3>服务</h3>
                <ul>
                  <li>Apple Music</li>
                  <li>iCloud</li>
                  <li>Apple Pay</li>
                </ul>
                <div style={{height: '16px'}}></div>
                <h3>客户</h3>
                <ul>
                  <li>管理你的 Apple ID</li>
                  <li>Apple Store 账户</li>
                  <li>iCloud.com</li>
                </ul>
              </div>
              <div className="fld-iPhoneHomePage_footer__content___directory____column">
                <h3>Apple Store 商店</h3>
                <ul>
                  <li>查找零售店</li>
                  <li>查找零售店</li>
                  <li>查找零售店</li>
                  <li>查找零售店</li>
                  <li>查找零售店</li>
                  <li>查找零售店</li>
                  <li>查找零售店</li>
                  <li>查找零售店</li>
                  <li>查找零售店</li>
                  <li>查找零售店</li>
                  <li>查找零售店</li>
                </ul>
              </div>
              <div className="fld-iPhoneHomePage_footer__content___directory____column">
                <h3>服务</h3>
                <ul>
                  <li>Apple Music</li>
                  <li>iCloud</li>
                  <li>Apple Pay</li>
                </ul>
                <div style={{height: '16px'}}></div>
                <h3>客户</h3>
                <ul>
                  <li>管理你的 Apple ID</li>
                  <li>Apple Store 账户</li>
                  <li>iCloud.com</li>
                </ul>
              </div>
              <div className="fld-iPhoneHomePage_footer__content___directory____column">
                <h3>服务</h3>
                <ul>
                  <li>Apple Music</li>
                  <li>iCloud</li>
                  <li>Apple Pay</li>
                </ul>
                <div style={{height: '16px'}}></div>
                <h3>客户</h3>
                <ul>
                  <li>管理你的 Apple ID</li>
                  <li>Apple Store 账户</li>
                  <li>iCloud.com</li>
                </ul>
              </div>
            </div>
            <div className="fld-iPhoneHomePage_footer__content___footer">
              <div className="fld-iPhoneHomePage_footer__content___footer____shop">
                <p>更多选购方式：<span>查找你附近的 Apple Store 零售店</span>及<span>更多门店</span>，或者致电 400-666-8800。</p>
              </div>
              <div className="fld-iPhoneHomePage_footer__content___footer____legal">
                <p>Copyright © 2020 Apple Inc. 保留所有权利。</p>
                <ul>
                  <li>隐私政策</li>
                  <li>使用条款</li>
                  <li>销售政策</li>
                  <li>法律信息</li>
                  <li>地图网站</li>
                </ul>
              </div>
              <p className="fld-iPhoneHomePage_footer__content___footer____location">京ICP备10214630 营业执照 无线电发射设备销售备案编号11201910351200</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default HomePage;
