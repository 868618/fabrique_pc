import React, { useState } from 'react';
import intl from 'react-intl-universal';
// import '../App.css';

function Business() {
  const [isShow, setIsShow] = useState(intl.options.currentLocale);
  const family = intl.options.currentLocale == 'zh' ? 'Source' : 'Ogg';
  const family2 =
    intl.options.currentLocale == 'zh' ? 'Source' : 'MontserratLighter';
  const style = {
    fontFamily: family,
    fontWeight: intl.options.currentLocale == 'zh' ? 'border' : 'lighter'
  };
  const style2 = {
    fontFamily: family2
  };
  const ordinary = {
    fontFamily:
      intl.options.currentLocale == 'zh' ? 'SourceLight' : 'MontserratLighter',
    fontWeight: 'lighter'
  };
  return (
    <div className='business' style={{ paddingBottom: '100px' }}>
      <div className='business-name' style={style}>
        {intl.get('zhoubian')}
      </div>
      <div className='business-subname'>
        <img
          src='https://oss.guangmangapp.com/3169ec1d-96da-4fb1-8cac-ecafd2c1717c.png'
          alt=''
        />
      </div>
      <section className='bussiness-box'>
        <div className='business-list'>
          <div className='business-list-item-mall'></div>
          <div className='business-list-item-mall'></div>
          <div className='business-list-item-mall'></div>
        </div>
      </section>
    </div>
  );
}

export default Business;
