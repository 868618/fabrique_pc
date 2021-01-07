import React, {useEffect, useState, useContext} from "react";
import Resize from "../../../../context/Resize";
import Swiper from 'swiper'
import 'swiper/swiper-bundle.css'
import { withRouter } from 'react-router-dom'
import intl from "react-intl-universal";

const CustomSmallSwiper = (props) => {
    const { clientWidth  } = useContext(Resize)
    const [swiper, setSwiper] = useState(null)
    const [realIndex, setRealIndex] = useState(0)
    useEffect(() => {
        setTimeout(() => {
            setSwiper(new Swiper('.small_2021_1_6', {
                slidesPerView: 1.5625,
                centeredSlides: true,
                loop : true,
                observer: true,
                observeParents:true,
                observeSlideChildren:true,
                on: {
                    transitionEnd (cur) {
                        setRealIndex(cur.realIndex)
                        cur.updateSize()
                    }
                }
            }))
            swiper && swiper.updateSize()
        })
        // eslint-disable-next-line
    }, [clientWidth])

    const [ordinary, setOrdinary] = useState(null)
    const [style, setStyle] = useState(null)
    const [opus, setOpus] = useState([])
    useEffect(() => {
        setOrdinary({
            fontFamily: intl.options.currentLocale == 'zh' ? 'SourceLight' : 'MontserratLighter'
        })
        setStyle({
            fontFamily: intl.options.currentLocale == 'zh' ? 'Source' : 'Ogg',
            fontWeight: intl.options.currentLocale == 'zh' ? 'bolder' : 'lighter'
        })
        setOpus(props.list.opus.concat([{ src: props.list.back }]))
    }, [])
    return (
        <>
            <div className="custom_small_swiper_box">
                <header className="header" style={style}>
                    {intl.get('detail_swiper_title')}
                </header>

                <div className="swiper-container container small_2021_1_6">
                    <div className="swiper-wrapper">
                        { opus.map((item, index) => (<div className="swiper-slide item" key={index}><img alt='' src={item.src} /></div>)) }
                    </div>
                </div>

                <div className='tip' style={ordinary}>{realIndex + 1}/{opus.length}</div>

            </div>
            <style jsx='true'>{`                    
              .custom_small_swiper_box{
                background-color: #EDF0F0;
                padding-top: 13.33vw;
                padding-bottom: 14.13vw;
              }
              .custom_small_swiper_box .header{
                font-size: 8vw;
                font-weight: bold;
                color: #031C24;
                text-align: center;
              }
              .container{
                margin-top: 10.67vw;
              }
              .container .item{
                width: 64vw;
                height: 96vw;
                transform: scale(0.8);
                overflow: hidden;
                transition: all .45s;
                opacity: .3;
              }
              .container .item img{
                display: block;
                width: 100%;
              }
              .container .swiper-slide-active,.custom_small_swiper_box .swiper-slide-duplicate-active{
                transform: scale(1);
                opacity: 1 !important;
              }
              .custom_small_swiper_box .tip {
                font-size: 15px;
                font-weight: 300;
                color: #031C24;
                text-align: center;
                margin-top: 3.125vw;
              }
            `}</style>
        </>
    )
}
export default withRouter(CustomSmallSwiper)