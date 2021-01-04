import React, { useState } from 'react';
import classnames from 'classnames';
import intl from 'react-intl-universal';
import { withRouter } from 'react-router-dom'
// 导航拆分
// import NavTop from './NavTop'
import Home from './Home'

function Banner(props) {
  const family =
    intl.options.currentLocale == 'zh' ? 'SourceRegular' : 'MontserratRegular';
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
  console.log(props);
  const [isShow, setIsShow] = useState(false);
  const Nav = classnames('nav', {
    show: isShow
  });
  const navMenu = classnames('nav-menu', { hide: isShow });
  return (
    <div className='banner-wrap' id="banner">
        <div style={{ display: 'none' }}>
            <div className='banner-bg'></div>
            <video
                muted
                id='video'
                className='banner-bg'
                src='https://oss.guangmangapp.com/d4a50b28-fe78-4ad4-b12a-a7340d324ec1'
                controls=''
                autoPlay
                loop='loop'
            />
            <img
                className='banner-bg-mobile'
                src='https://oss.guangmangapp.com/e095687b-20f2-4242-9b65-3ca3e258b918.png'
                alt=''
            />
            <div className='mask'></div>
            <div className='logo-solgan'>
                <img
                    src='https://oss.guangmangapp.com/e52c49f4-01b7-4826-9382-dd5ec056163d.png'
                    alt=''
                    className='logo-center'
                />
                <div className='solgan' style={style2}>
                    {intl.get('solgan')}
                </div>
            </div>
        </div>
        <Home />
        <div className='nav-top'>
        <div className='nav-wrap'>
          <img
            className='nav-inner-pic'
            src='https://oss.guangmangapp.com/ef3f19aa-5c6e-46fb-93ce-83bebddb9ede.png'
            alt=''
          />
          <img
            onClick={() => setIsShow(true)}
            className={navMenu}
            src='https://oss.guangmangapp.com/c2f9b1df-8a30-4ebd-be61-9efec844f69b.png'
            alt=''
          />
          <div className={Nav}>
            <img
              className='close'
              onClick={() => setIsShow(false)}
              src='https://oss.guangmangapp.com/733fbb3b-24cb-49c7-9239-b8202f22ea9e.png'
              alt=''
            />
            <ul>
              {props.links.map((item, index) => (
                <li key={item.hoverTitle} style={style}>
                  <a
                    href={item.href}
                    className={item.hoverStatus ? 'active' : ''}
                    onClick={() => {
                      setIsShow(false);
                      props.handleClick(index);
                    }}
                  >
                    {intl.options.currentLocale === 'zh' ? item.title : item.hoverTitle}
                  </a>
                </li>
              ))}
              <li style={style}>
                {intl.options.currentLocale === 'zh' ? '简体中文' : 'English'}
                <img
                  src='https://oss.guangmangapp.com/e587f0d8-be81-4ddf-85f9-f6b2fd9ea361.png'
                  alt=''
                />
                <div
                  className='select-box'
                  onClick={() => {
                    props.changeLang();
                    setIsShow(false);
                  }}
                >
                  {intl.options.currentLocale === 'zh' ? 'English' : '简体中文'}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Banner);
