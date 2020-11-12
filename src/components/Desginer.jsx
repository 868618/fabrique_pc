import React, {useState} from 'react';
import intl from 'react-intl-universal';
// import '../App.css';

function Desginer() {
    const [isShow, setIsShow] = useState(intl.options.currentLocale);
    const family = intl.options.currentLocale == 'zh' ? 'Source' : 'Ogg'
    const style = {
        fontFamily: family,
        fontWeight: intl.options.currentLocale == 'zh' ? 'border': 'lighter'
    }
  return (
    <div className="desginer">
      <div className="desginer-name" style={style}>{intl.get('desginer')}</div>
      <div className="desginer-box">
          <div className="desginer-box-item">
            <img src="https://oss.guangmangapp.com/601a7eae-e8b6-4a7f-875d-a6fedc85c1a9.png" alt=""/>
            <img src="https://oss.guangmangapp.com/d2436db1-3e04-4cde-b878-f1bc74474b2f.png" alt=""/>
          </div>
        <div className="desginer-box-item">
          <img src="https://oss.guangmangapp.com/315cc3bf-5e98-4ca2-b1c8-f84fc7f9cb01.png" alt=""/>
          <img src="https://oss.guangmangapp.com/a87fccaa-69f8-44eb-bd62-4ff839ebabe0.png" alt=""/>
        </div>
      </div>
    </div>
  );
}

export default Desginer;
