import React, {useEffect, useState, useContext} from "react";
import Resize from "../../../../context/Resize";
import Swiper from 'swiper'
import 'swiper/swiper-bundle.css'

const CustomSmallSwiper = ({list}) => {
    const { clientWidth  } = useContext(Resize)
    const [swiper, setSwiper] = useState(null)
    useEffect(() => {
        !swiper && setSwiper(new Swiper('.swiper-container', {
            slidesPerView: 1.5625,
            centeredSlides: true,
            loop: true,
            observer: true,
            observeParents:true,
            observeSlideChildren:true
        }))
        swiper && swiper.updateSize()
        // eslint-disable-next-line
    }, [clientWidth])
    return (
        <>
            <div className="custom_small_swiper_box">
                <header className="header">
                    2020春夏联名系列
                </header>

                <div className="swiper-container container">
                    <div className="swiper-wrapper">
                        { list.map((item, index) => (<div className="swiper-slide item" key={index}><img alt='' src={item.face} /></div>)) }
                    </div>
                </div>

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
              }
              .container .item img{
                display: block;
                width: 100%;
              }
              .container .swiper-slide-active,.custom_small_swiper_box .swiper-slide-duplicate-active{
                transform: scale(1);
              }
            `}</style>
        </>
    )
}

export default CustomSmallSwiper