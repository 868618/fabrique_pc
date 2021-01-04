import React, {useEffect, useState, useImperativeHandle, forwardRef } from "react"
import Swiper from 'swiper'
import 'swiper/swiper-bundle.css'

const CustomSwiper = (props, ref) => {
    const [swiper, setSwiper] = useState(null)
    useEffect(() => {
        new Swiper('.custombigswiper', {
            // slidesPerView: props.slidesPerView,
            slidesPerView: 3,
            centeredSlides: true,
            loop: true,
            observer: true,
            observeParents:true,
            observeSlideChildren:true,
            spaceBetween: 28,
            on: {
                init (instantiation) {
                    !swiper && setSwiper(instantiation)
                    swiper && swiper.updateSize()
                },
                slideChangeTransitionEnd() {
                    props.setActiveIndex && props.setActiveIndex(this.realIndex)
                },
                // 先禁用点击功能
                tap ($swiper) {
                    const { clickedIndex, activeIndex } = $swiper
                    if (clickedIndex === activeIndex) return
                    clickedIndex > activeIndex ? $swiper.slideNext() : $swiper.slidePrev()
                }
            }
        })
        // eslint-disable-next-line
    }, [])
    useImperativeHandle(ref, () => ({ swiper }))
    return (
        <>
            <div className="custom_big_swiper_box">
                <div className="swiper-container custombigswiper">
                    <div className="swiper-wrapper">
                        { props.list.opus.map((item, index) => (<div className="swiper-slide item" key={index}><img src={item.src} alt=""/></div>)) }
                    </div>
                </div>
            </div>

            <style jsx="true">{`
                .custom_big_swiper_box{
                  width: 100%;
                  height: 100%;
                }
                .custom_big_swiper_box .swiper-container{
                  height: 100%;
                }
                .custom_big_swiper_box .item {
                  height: 100%;
                  transform: scale(0.9);
                  overflow: hidden;
                  transition: all .4s;
                }
                .custom_big_swiper_box .item img {
                  display: block;
                  width: 100%;
                }
                .swiper-slide-active, .swiper-slide-duplicate-active{
                  transform: scale(1) !important;
                }
            `}</style>
        </>
    )
}

export default forwardRef(CustomSwiper)