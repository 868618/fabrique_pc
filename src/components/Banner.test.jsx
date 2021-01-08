import React, {useEffect, useState, useMemo} from 'react';
import classnames from 'classnames';
import intl from 'react-intl-universal';
import { withRouter } from 'react-router-dom'
import debounce from 'lodash/debounce'

const Banner = (props) => {
  const style = {
    fontFamily: intl.options.currentLocale == 'zh' ? 'SourceRegular' : 'MontserratRegular',
    fontWeight: intl.options.currentLocale == 'zh' ? 'bolder' : 'lighter'
  };
  const [isShow, setIsShow] = useState(false);
  const Nav = classnames('nav', {
    show: isShow
  });
  const [links, setLinks] = useState([
    { title: '首页', hoverTitle: 'HOME', href: '#home', hoverStatus: true },
    {
      title: '关于我们',
      hoverTitle: 'About Us',
      href: '#aboutus',
      hoverStatus: false
    },
    {
      title: '我们的业务',
      hoverTitle: 'What We Do',
      href: '#business',
      hoverStatus: false
    },
    {
      title: 'Fabrique App',
      hoverTitle: 'Our App',
      href: '#fabrique_app',
      hoverStatus: false
    },
    {
      title: '合作设计师',
      hoverTitle: 'Collaborative Designers',
      href: '#hezuoshejishi',
      hoverStatus: false
    },
    {
      title: '品牌资源',
      hoverTitle: 'Brand Resources',
      href: '#pinpaiziyuan',
      hoverStatus: false
    },
    {
      title: '联系我们',
      hoverTitle: 'Contact Us',
      href: '#contact',
      hoverStatus: false
    }
  ])

  const handleClick = debounce(function (index, item) {
    if ([6, 7].includes(index)) index--
    const newLinks = links.map(((item, idx) => Object.assign(item, {hoverStatus : index == idx})))
    setLinks(newLinks)
  }, 50)

  useEffect(() => {
    handleClick(props.index)
  }, [props.index])
  const [isGo, setIsGo] = useState(false)

  useEffect(() => {
    setIsGo(props.location.pathname !== '/detail')
  }, [props.location.pathname])
  // 默认选中
  useEffect(() => {
    if (props.location.pathname === '/detail') {
      handleClick(4)
      window.onscroll = () => {}
    }
  }, [])

  useMemo(() => {
    window.onscroll = () => {}
    return () => {
      console.log('执行卸载')
      window.onscroll = () => {}
    }
  }, [])

  window.onscroll = () => {
    const list = ['home', 'aboutus', 'business', 'fabrique_app', 'hezuoshejishi', 'pinpaiziyuan', 'medium', 'contact']
    // const pathname = props.location.pathname
    const halfScreenHeight = window.innerHeight * 0.5
    if (isGo) {
      list.forEach((item, index) => {
        const dom = document.getElementById(item)
        const rect = dom.getBoundingClientRect()
        if (rect.top <= halfScreenHeight) handleClick(index, item)
      })
    }
  }

  const navMenu = classnames('nav-menu', { hide: isShow });
  return (
    <div className='banner-wrap' id="banner">
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
              {links.map((item, index) => (
                <li key={item.hoverTitle} style={style}>
                  <a
                    href={item.href}
                    className={item.hoverStatus ? 'active' : ''}
                    onClick={() => {
                      setIsShow(false);
                      console.log('index++++++------******/////', index)
                      handleClick(index);
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
