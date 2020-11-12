import React, {useState} from 'react';
import intl from 'react-intl-universal';
// import '../App.css';

function Business() {
  const [isShow, setIsShow] = useState(intl.options.currentLocale);
  const family = intl.options.currentLocale == 'zh' ? 'Source' : 'Ogg'
  const family2 = intl.options.currentLocale == 'zh' ? 'Source' : 'MontserratLighter'
  const style = {
    fontFamily: family,
    fontWeight: intl.options.currentLocale == 'zh' ? 'border': 'lighter'
  }
  const style2 = {
      fontFamily: family2
  }
  const ordinary = {
    fontFamily: intl.options.currentLocale == 'zh' ? 'SourceLight' : 'MontserratLighter',
    fontWeight:  'lighter'
  }
  return (
    <div className="business" id="business">
      <div className="business-name" style={style}>{intl.get('business')}</div>
      <div className="business-subname">
        <img src="https://oss.guangmangapp.com/3169ec1d-96da-4fb1-8cac-ecafd2c1717c.png" alt=""/>
      </div>
      <section className="bussiness-box">
        <div className="business-list">
          <div className="business-list-item">
            <div className="business-list-item-title" style={style}>{intl.get('business.content')}</div>
            <div className="business-list-item-tip" style={ordinary}>
              <p>{intl.get('business-neirong-1')}</p>
              <p>{intl.get('business-neirong-2')}</p>
              <p>{intl.get('business-neirong-3')}</p>
            </div>
          </div>
          <div className="business-list-item">
            <div className="business-list-item-title" style={style}>{intl.get('business.hezuo')}</div>
            <div className="business-list-item-tip" style={ordinary}>
              <p>{intl.get('business-hezuo-1')}</p>
              <p>{intl.get('business-hezuo-2')}</p>
            </div>
          </div>
          <div className="business-list-item">
            <div className="business-list-item-title" style={style}>{intl.get('shequ')}</div>
            <div className="business-list-item-tip" style={ordinary}>
              <p>{intl.get('business-shequ-1')}</p>
              <p>{intl.get('business-shequ-2')}</p>
              <p>{intl.get('business-shequ-3')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Business;
