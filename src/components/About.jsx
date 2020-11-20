import React from 'react';
import intl from 'react-intl-universal';
// import '../App.css';

function About() {
  const family = intl.options.currentLocale == 'zh' ? 'Source' : 'Ogg';

  const style = {
    fontFamily: family,
    fontWeight: intl.options.currentLocale == 'zh' ? 'bolder' : 'lighter'
  };
  const ordinary = {
    fontFamily:
      intl.options.currentLocale == 'zh' ? 'SourceLight' : 'MontserratLighter'
  };
  return (
    <div id='aboutus' className='about-wrap'>
      <div className='title' style={style}>
        {intl.get('about')}
      </div>
      <img
        src='https://oss.guangmangapp.com/3169ec1d-96da-4fb1-8cac-ecafd2c1717c.png'
        alt=''
        className='decorate'
      />
      <div className='box'>
        <div className='box-item'>
          <img
            src='https://oss.fabrique.cn/ed79331e-c636-4caf-ae4d-0f435b9be63a.png'
            alt=''
            className='img1'
          />
          <div className='prospect'>
            <h2 style={style}>{intl.get('prospect')}</h2>
            <h6>To inspire a new pride in self-expression.</h6>
            <span></span>
            <p style={ordinary}>{intl.get('prospect.first')}</p>
            <p style={ordinary}>{intl.get('prospect.second')}</p>
            <p style={ordinary}>{intl.get('prospect.third')}</p>
          </div>
        </div>
        <div className='box-item'>
          <div className='value'>
            <h2 style={style}>{intl.get('value')}</h2>
            <h6>Making valuable connections</h6>
            <span></span>
            <p style={ordinary}>{intl.get('value.first')}</p>
            <p style={ordinary}>{intl.get('value.second')}</p>
            <p style={ordinary}>{intl.get('value.third')}</p>
            <h6>The power of design</h6>
            <span></span>
            <p style={ordinary}>{intl.get('value.four')}</p>
            <p style={ordinary}>{intl.get('value.five')}</p>
            <p style={ordinary}>{intl.get('value.six')}</p>
            <h6>Celebrating diverse beauty</h6>
            <span></span>
            <p style={ordinary}>{intl.get('value.seven')}</p>
            <p style={ordinary}>{intl.get('value.eight')}</p>
            <p style={ordinary}>{intl.get('value.nine')}</p>
          </div>
          <img
            src='https://oss.fabrique.cn/f3e75325-94ec-4ed2-be0e-8c125fa267a1.png'
            alt=''
            className='img2'
          />
        </div>
        <div className='box-item'>
          <img
            src='https://oss.fabrique.cn/a3fae6f0-2ac8-4661-9bde-1c21660534ae.png'
            alt=''
            className='img3'
          />
          <div className='character'>
            <h2 style={style}>{intl.get('character')}</h2>
            <h6>Stylish not trendy</h6>
            <span></span>
            <p style={ordinary}>{intl.get('character.first')}</p>
            <p style={ordinary}>{intl.get('character.second')}</p>
            <h6>Intelligent and inspiring</h6>
            <span></span>
            <p style={ordinary}>{intl.get('character.third')}</p>
            <p style={ordinary}>{intl.get('character.four')}</p>
            <h6>Real and Trustworthy</h6>
            <span></span>
            <p style={ordinary}>{intl.get('character.five')}</p>
            <p style={ordinary}>{intl.get('character.six')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
