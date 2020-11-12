import React, {useState} from 'react';
import intl from 'react-intl-universal';
function Medium() {
    const [isShow, setIsShow] = useState(intl.options.currentLocale);
    const family = intl.options.currentLocale == 'zh' ? 'Source' : 'Ogg'
    const style = {
        fontFamily: family,
        fontWeight: intl.options.currentLocale == 'zh' ? 'border': 'lighter'
    }
    return (
        <div className="medium" id="medium">
            <div className="medium-box">
                <div className="medium-video">
                    <div className="medium-title" style={style}>{intl.get('buzhiyuta')}</div>
                    <div className="medium-video-list">
                        <section>
                            <img src="http://oss.cogo.club/f66a4e89-0bb8-487b-a52c-facb4b9cce24.png" className="medium-video-item" alt="" />
                        </section>
                        <section>
                            <img src="http://oss.cogo.club/fc73ec40-edcc-468f-bd85-aa6456a1822a.png" className="medium-video-item" alt="" />
                        </section>
                        <section>
                            <img src="http://oss.cogo.club/8701a764-f1d5-4f6e-8019-9b3ccceef829.png" className="medium-video-item" alt="" />
                        </section>
                        <section>
                            <img src="http://oss.cogo.club/59224f6c-8ba2-4036-8c89-c84c86768816.png" className="medium-video-item" alt="" />
                        </section>
                    </div>
                </div>

                <div className="medium-video">
                    <div className="medium-title" style={style}>{intl.get('shortvideo')}</div>
                    <div className="medium-video-list">
                        <section>
                            <img src="http://oss.cogo.club/aea0f7aa-5a39-46fa-b99a-190cad08cf3e.png" className="medium-video-item" alt=""/>
                        </section>
                        <section>
                            <img src="http://oss.cogo.club/750b2a44-c7c6-42cc-b4ad-a8a2410e30fb.png" className="medium-video-item" alt=""/>
                        </section>
                        <section>
                            <img src="http://oss.cogo.club/3847033a-b16f-4910-b1c8-ce0f67e60ab8.png" className="medium-video-item" alt=""/>
                        </section>
                        <section>
                            <img src="http://oss.cogo.club/6e4110cd-0125-44b2-97b7-dfb6eb821b05.png" className="medium-video-item" alt=""/>
                        </section>
                    </div>
                </div>
            </div>

            <div className="fixd-video"></div>
        </div>
    )
}

export default Medium;
