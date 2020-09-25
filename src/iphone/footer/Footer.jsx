import React from 'react';
import '../styles/footer.less';

const Footer = () => {
  return (
    <div className="fldFooter">
      <div className="fldFooter-content">
        <div className="fldFooter-content_tips">
          <p>1. 免费试用期结束后，每月收费 RMB 10。无需合约。当试用期结束后，会员方案将按月自动续订，直至取消订阅。</p>
          <div style={{ height: '9px' }}></div>
          <p>产品到店发售日期，各 Apple Store 零售店可能有所不同。详情请咨询相关零售店。</p>
        </div>
        <div className="fldFooter-content_directory">
          <div className="fldFooter-content_directory__column">
            <h3 className="fldFooter-content_directory__column___title">选购及了解</h3>
            <ul>
              <li className="fldFooter-content_directory__column___sectionItem">Mac</li>
              <li className="fldFooter-content_directory__column___sectionItem">iPad</li>
              <li className="fldFooter-content_directory__column___sectionItem">iPhone</li>
              <li className="fldFooter-content_directory__column___sectionItem">Watch</li>
              <li className="fldFooter-content_directory__column___sectionItem">AirPods</li>
              <li className="fldFooter-content_directory__column___sectionItem">HomePod</li>
              <li className="fldFooter-content_directory__column___sectionItem">iPod touch</li>
              <li className="fldFooter-content_directory__column___sectionItem">配件</li>
              <li className="fldFooter-content_directory__column___sectionItem">App Store 充值卡</li>
            </ul>
          </div>
          <div className="fldFooter-content_directory__column">
            <h3 className="fldFooter-content_directory__column___title">服务</h3>
            <ul>
              <li className="fldFooter-content_directory__column___sectionItem">Apple Music</li>
              <li className="fldFooter-content_directory__column___sectionItem">iCloud</li>
              <li className="fldFooter-content_directory__column___sectionItem">Apple Pay</li>
            </ul>
            <div className="fldFooter-content_directory__column___whiteSpace"></div>
            <h3 className="fldFooter-content_directory__column___title">客户</h3>
            <ul>
              <li className="fldFooter-content_directory__column___sectionItem">管理你的 Apple ID</li>
              <li className="fldFooter-content_directory__column___sectionItem">Apple Store 账户</li>
              <li className="fldFooter-content_directory__column___sectionItem">iCloud.com</li>
            </ul>
          </div>
          <div className="fldFooter-content_directory__column">
            <h3 className="fldFooter-content_directory__column___title">Apple Store 商店</h3>
            <ul>
              <li className="fldFooter-content_directory__column___sectionItem">查找零售店</li>
              <li className="fldFooter-content_directory__column___sectionItem">查找零售店</li>
              <li className="fldFooter-content_directory__column___sectionItem">查找零售店</li>
              <li className="fldFooter-content_directory__column___sectionItem">查找零售店</li>
              <li className="fldFooter-content_directory__column___sectionItem">查找零售店</li>
              <li className="fldFooter-content_directory__column___sectionItem">查找零售店</li>
              <li className="fldFooter-content_directory__column___sectionItem">查找零售店</li>
              <li className="fldFooter-content_directory__column___sectionItem">查找零售店</li>
              <li className="fldFooter-content_directory__column___sectionItem">查找零售店</li>
              <li className="fldFooter-content_directory__column___sectionItem">查找零售店</li>
              <li className="fldFooter-content_directory__column___sectionItem">查找零售店</li>
            </ul>
          </div>
          <div className="fldFooter-content_directory__column">
            <h3 className="fldFooter-content_directory__column___title">服务</h3>
            <ul>
              <li className="fldFooter-content_directory__column___sectionItem">Apple Music</li>
              <li className="fldFooter-content_directory__column___sectionItem">iCloud</li>
              <li className="fldFooter-content_directory__column___sectionItem">Apple Pay</li>
            </ul>
            <div className="fldFooter-content_directory__column___whiteSpace"></div>
            <h3 className="fldFooter-content_directory__column___title">客户</h3>
            <ul>
              <li className="fldFooter-content_directory__column___sectionItem">管理你的 Apple ID</li>
              <li className="fldFooter-content_directory__column___sectionItem">Apple Store 账户</li>
              <li className="fldFooter-content_directory__column___sectionItem">iCloud.com</li>
            </ul>
          </div>
          <div className="fldFooter-content_directory__column">
            <h3 className="fldFooter-content_directory__column___title">服务</h3>
            <ul>
              <li className="fldFooter-content_directory__column___sectionItem">Apple Music</li>
              <li className="fldFooter-content_directory__column___sectionItem">iCloud</li>
              <li className="fldFooter-content_directory__column___sectionItem">Apple Pay</li>
            </ul>
            <div className="fldFooter-content_directory__column___whiteSpace"></div>
            <h3 className="fldFooter-content_directory__column___title">客户</h3>
            <ul>
              <li className="fldFooter-content_directory__column___sectionItem">管理你的 Apple ID</li>
              <li className="fldFooter-content_directory__column___sectionItem">Apple Store 账户</li>
              <li className="fldFooter-content_directory__column___sectionItem">iCloud.com</li>
            </ul>
          </div>
        </div>
        <div className="fldFooter-content_footer">
          <div className="fldFooter-content_footer__shop">
            <p>
              更多选购方式：<span>查找你附近的 Apple Store 零售店</span>及<span>更多门店</span>，或者致电 400-666-8800。
            </p>
          </div>
          <div className="fldFooter-content_footer__legal">
            <p>Copyright © 2020 Apple Inc. 保留所有权利。</p>
            <ul>
              <li>隐私政策</li>
              <li>使用条款</li>
              <li>销售政策</li>
              <li>法律信息</li>
              <li>地图网站</li>
            </ul>
          </div>
          <p className="fldFooter-content_footer__location">
            京ICP备10214630 营业执照 无线电发射设备销售备案编号11201910351200
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
