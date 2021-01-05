import React, { useState, useContext } from 'react'
import intl from "react-intl-universal"
import '../style/home/index.scss'
const Home = () => {
    const [bgvideo] = useState('https://oss.guangmangapp.com/d4a50b28-fe78-4ad4-b12a-a7340d324ec1')
    const [bgImg] = useState('https://oss.guangmangapp.com/e095687b-20f2-4242-9b65-3ca3e258b918.png')
    const [solgan] = useState('https://oss.guangmangapp.com/e52c49f4-01b7-4826-9382-dd5ec056163d.png')
    const style = {
        fontFamily: intl.options.currentLocale == 'zh' ? 'SourceLight' : 'MontserratLighter',
        fontWeight: intl.options.currentLocale == 'zh' ? 'lighter' : 'lighter'
    };
    return (
        <>
            <div className='home' id='home'>
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
                    <div className='solgan' style={style}>
                        {intl.get('solgan')}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home