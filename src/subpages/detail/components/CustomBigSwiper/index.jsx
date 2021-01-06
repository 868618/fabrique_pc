import React, {useEffect, useState, useImperativeHandle, forwardRef } from "react"
import Swiper from 'swiper'
import 'swiper/swiper-bundle.css'

const CustomSwiper = (props, ref) => {
    const [swiper, setSwiper] = useState(null)
    useEffect(() => {
        setTimeout(() => {
            console.log('初始化了')
            !swiper && setSwiper(new Swiper('.custombigswiper_2021_1_6', {
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
                        // swiper && swiper.updateSize()
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
            }))
        }, 200)
        // eslint-disable-next-line
    }, [])
    const [opus] = useState(props.list.opus.concat([{ src: props.list.back }]))
    useImperativeHandle(ref, () => ({ swiper }))
    return (
        <>
            <div className="custom_big_swiper_box">
                <div className="swiper-container custombigswiper_2021_1_6">
                    <div className="swiper-wrapper">
                        { opus.map((item, index) => (<div className="swiper-slide item" key={'custom_ddd_' + index}><img src={item.src} alt=""/></div>)) }
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
                  opacity: .3;
                }
                .custom_big_swiper_box .item img {
                  display: block;
                  width: 100%;
                }
                .swiper-slide-active, .swiper-slide-duplicate-active{
                  transform: scale(1) !important;
                  opacity: 1 !important;
                }
            `}</style>
        </>
    )
}

export default forwardRef(CustomSwiper)