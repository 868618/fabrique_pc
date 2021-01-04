import React, { useState } from 'react'
import '../style/home/index.scss'
import intl from "react-intl-universal";

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
            <div className="home">
                <video className='home_bgvideo' muted src={bgvideo} controls='' autoPlay loop='loop' />
                <img className='home_bgimg' src={bgImg} alt='' />

                <section className="home_mask">
                    <div className='home_solgan'>
                        <img src={ solgan } alt='' className='home_logo' />
                    </div>
                    <div className='solgan_tip' style={style}> {intl.get('solgan')} </div>
                </section>

            </div>
        </>
    )
}
export default Home