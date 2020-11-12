import React, { useState } from 'react';
import intl from 'react-intl-universal';
// import '../App.css';

function Glamor() {
  const [isShow, setIsShow] = useState(intl.options.currentLocale);
  const family = intl.options.currentLocale == 'zh' ? 'Source' : 'Ogg';
  const style = {
    fontFamily: family,
    fontWeight:
      intl.options.currentLocale == 'zh' ? 'border !important' : 'lighter'
  };
  const family2 =
    intl.options.currentLocale == 'zh' ? 'Source' : 'MontserratLighter';
  const style2 = {
    fontFamily: family2
  };
  const ordinary = {
    fontFamily:
      intl.options.currentLocale == 'zh' ? 'SourceLight' : 'MontserratLighter',
    fontWeight: 'lighter'
  };
  return (
    <div className='glamor' id='glamor'>
      <div className='glamor-name' style={style}>
        {intl.get('guangmangapp')}
      </div>
      <div className='glamor-subname'>
        <img
          src='https://oss.guangmangapp.com/3169ec1d-96da-4fb1-8cac-ecafd2c1717c.png'
          alt=''
        />
      </div>

      <div className='glamor-tip' style={ordinary}>
        {intl.get('glamor-tip-1')}
        <br />
        {intl.get('glamor-tip-2')}
        <br />
        {intl.get('glamor-tip-3')}
      </div>

      <div className='glamor-box gray'>
        <div className='glamor-box-clear'>
          <div className='glamor-box-txt left'>
            <div className='glamor-box-txt-title' style={style}>
              {intl.get('glamor-box-txt-title1')}
            </div>
            <div className='glamor-box-txt-main' style={ordinary}>
              <p
                style={style2}
                className='glamor-box-txt-main-tip'
                style={style}
              >
                {intl.get('glamor-box-txt-main-1')}
              </p>
              <i className='heng'></i>
              {intl.get('glamor-box-txt-main-1-1')}
              <br />
              {intl.get('glamor-box-txt-main-1-2')}
              <br />
              {intl.get('glamor-box-txt-main-1-3')}
              <br />
            </div>
          </div>
          <div className='glamor-box-img right'>
            <img
              src='https://oss.guangmangapp.com/a3a8c559-6df8-47cd-859b-aa122f2cbf74.png'
              alt=''
            />
          </div>
        </div>
      </div>

      <div className='glamor-box light'>
        <div className='glamor-box-clear'>
          <div className='glamor-box-img left'>
            <img
              src='https://oss.guangmangapp.com/cd170cca-6e46-4b20-953b-575078706a79.png'
              alt=''
            />
          </div>
          <div className='glamor-box-txt right'>
            <div className='glamor-box-txt-title' style={style}>
              {intl.get('glamor-box-txt-title2')}
            </div>
            <div className='glamor-box-txt-main' style={ordinary}>
              <p
                style={style2}
                className='glamor-box-txt-main-tip'
                style={style}
              >
                {intl.get('glamor-box-txt-main-2')}
              </p>
              <i className='heng'></i>
              {intl.get('glamor-box-txt-main-2-1')}
              <br />
              {intl.get('glamor-box-txt-main-2-2')}
              <br />
            </div>
          </div>
        </div>
      </div>

      <div className='glamor-box gray'>
        <div className='glamor-box-clear'>
          <div className='glamor-box-txt left'>
            <div className='glamor-box-txt-title' style={style}>
              {intl.get('glamor-box-txt-title3')}
            </div>
            <div className='glamor-box-txt-main' style={ordinary}>
              <p
                style={style2}
                className='glamor-box-txt-main-tip'
                style={style}
              >
                {intl.get('glamor-box-txt-main-3')}
              </p>
              <i className='heng'></i>
              {intl.get('glamor-box-txt-main-3-1')}
              <br />
              {intl.get('glamor-box-txt-main-3-2')}
              <br />
            </div>
          </div>
          <div className='glamor-box-img right'>
            <img
              src='https://oss.guangmangapp.com/c5c51cf3-6b08-4658-91db-edafb90b978f.png'
              alt=''
            />
          </div>
        </div>
      </div>

      <div className='glamor-box light'>
        <div className='glamor-box-clear'>
          <div className='glamor-box-img left'>
            <img
              src='https://oss.guangmangapp.com/c6339af5-0aec-4495-b6fb-0accae66958b.png'
              alt=''
            />
          </div>
          <div className='glamor-box-txt right'>
            <div className='glamor-box-txt-title' style={style}>
              {intl.get('glamor-box-txt-title4')}
            </div>
            <div className='glamor-box-txt-main' style={ordinary}>
              <p
                style={style2}
                className='glamor-box-txt-main-tip'
                style={style}
              >
                {intl.get('glamor-box-txt-main-4')}
              </p>
              <i className='heng'></i>
              {intl.get('glamor-box-txt-main-4-1')}
              <br />
              {intl.get('glamor-box-txt-main-4-2')}
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Glamor;
