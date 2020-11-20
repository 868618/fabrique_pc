import React, { useState } from 'react';
import classnames from 'classnames';
import intl from 'react-intl-universal';
function Footer() {
  const family = intl.options.currentLocale == 'zh' ? 'Source' : 'Ogg';
  const family2 =
    intl.options.currentLocale == 'zh' ? 'SourceLight' : 'MontserratLighter';
  const style = {
    fontFamily: family,
    fontWeight: intl.options.currentLocale == 'zh' ? 'bolder' : 'lighter'
  };
  const style2 = {
    fontFamily: family2,
    fontWeight: intl.options.currentLocale == 'zh' ? 'lighter' : 'lighter'
  };
  return (
    <div className='footer-wrap' style={style2} id="contact">
      {/*<div className='mt'></div>*/}
      <div id='contact' className='footer-title-en'>
        Live Unique
      </div>
      <div className='footer-title-ch' style={style}>
        {intl.get('Contact')}
      </div>
      <div className='contact-way'>
        <div className='contact'>
          <p>{intl.get('Tel')}：010-65023451</p>
          <p>{intl.get('Email')}：ask@fabrique.cn</p>
          <p>{intl.get('Weibo')}：@Fabrique时尚</p>
          <p>
            {intl.get('Add')}：{intl.get('Address')}
          </p>
        </div>
        <div className='contact-code'>
          <img
            src='https://oss.fabrique.cn/462d5195-9d15-402f-81bd-60b6eea837f1.png'
            alt=''
          />
          <p>{intl.get('Wechat')}</p>
        </div>
        <div className='contact-code'>
          <img
            src='https://oss.fabrique.cn/2b72e5a7-cfa8-4043-8c05-47551c1b0cee.png'
            alt=''
          />
          <p>{intl.get('Android')}</p>
        </div>
        <div className='contact-code'>
          <img
            src='https://oss.fabrique.cn/db927119-8934-482d-8330-facca2c2f7f9.png'
            alt=''
          />
          <p>{intl.get('IOS')}</p>
        </div>
      </div>
      <div className='stripe'>
        <img
          src='https://oss.guangmangapp.com/b08a4bb0-45b5-42e7-a464-8d7e318fcf2e.png'
          alt=''
        />
      </div>
      <div className='reference'>
        <p>Copyright © 2018 北京开果传媒科技有限公司 All rights reserved.</p>
        <p>
          <a href='http://www.beian.miit.gov.cn/'>京ICP备19054147号-2 </a>
          <img
            src='https://oss.guangmangapp.com/f4cda8c4-55f1-40e4-ba25-42a3dd3f41e8.png'
            alt=''
          />
          <a href='http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502040260'>
            京公网安备 11010502040260号
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
