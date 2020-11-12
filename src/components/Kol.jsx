import React, {useState} from 'react';
import intl from 'react-intl-universal';
// import '../App.css';

function Kol() {
    const [isShow, setIsShow] = useState(intl.options.currentLocale);
    const family = intl.options.currentLocale == 'zh' ? 'Source' : 'Ogg'
    const style = {
        fontFamily: family,
        fontWeight: intl.options.currentLocale == 'zh' ? 'border': 'lighter'
    }
  return (
    <div className="kol" id="kol">
      <div className="kol-name" style={style}>{intl.get('kol')}</div>
      <div className="kol-box">
          <div className="kol-list">
              <div className="kol-item">
                  <img src="https://oss.guangmangapp.com/a9f92409-35b4-440c-afcc-fca7ee72c130.png" alt=""/>
              </div>

              <div className="kol-item">
                  <img src="https://oss.guangmangapp.com/9f375b62-4a69-4892-a822-434c368425e0.png" alt=""/>
              </div>

              <div className="kol-item">
                  <img src="https://oss.guangmangapp.com/4a438613-21f4-4a13-a770-1c2f81149330.png" alt=""/>
              </div>

              <div className="kol-item">
                  <img src="https://oss.guangmangapp.com/f69ed4a8-3f9b-42c6-a3eb-fc5574104d68.png" alt=""/>
              </div>

              <div className="kol-item">
                  <img src="https://oss.guangmangapp.com/fc92f7aa-3a8f-42f7-bc62-de4933f0764c.png" alt=""/>
              </div>

              <div className="kol-item">
                  <img src="https://oss.guangmangapp.com/ddaf817d-a557-44bd-8118-908b7f649663.png" alt=""/>
              </div>

          </div>
      </div>
    </div>
  );
}

export default Kol;
