import React, {useEffect, useState, useContext, useRef, useMemo} from "react";
import Player from 'xgplayer';
// import '../../customstyle/.xgplayer/skin/index.js'
import Resize from "../../context/Resize";
import CustomBigSwiper from './components/CustomBigSwiper'
import CustomSmallSwiper from './components/CustomSmallSwiper'
import Banner from "../../components/Banner.test";
// import CustomBanner from "./components/CustomBanner";
import allList from '../../asset/desginers'
import { withRouter } from 'react-router-dom'
import intl from "react-intl-universal";


const Big = (props) => {
    const [ordinary, setOrdinary] = useState(null)
    const [style, setStyle] = useState(null)
    const [ links ] = useState([
        { title: '首页', hoverTitle: 'HOME', href: '#', hoverStatus: false },
        {
            title: '关于我们',
            hoverTitle: 'About Us',
            href: '#aboutus',
            hoverStatus: false
        },
        {
            title: '我们的业务',
            hoverTitle: 'What We Do',
            href: '#business',
            hoverStatus: false
        },
        {
            title: 'Fabrique App',
            hoverTitle: 'Our App',
            href: '#fabrique_app',
            hoverStatus: false
        },
        {
            title: '品牌资源',
            hoverTitle: 'Brand Resources',
            href: '#brandandmedia',
            hoverStatus: false
        },
        {
            title: '联系我们',
            hoverTitle: 'Contact Us',
            href: '#contact',
            hoverStatus: false
        }
    ])
    useEffect(() => {
        setOrdinary({
            fontFamily: intl.options.currentLocale == 'zh' ? 'SourceLight' : 'MontserratLighter'
        })
        setStyle({
            fontFamily: intl.options.currentLocale == 'zh' ? 'Source' : 'Ogg',
            fontWeight: intl.options.currentLocale == 'zh' ? 'bolder' : 'lighter'
        })
    }, [intl.options.currentLocale])
    const [list, setList] = useState(null)
    useEffect(() => {
        if (props.list) {
            props.list && setList(props.list)
        }
    }, [props.list])
    const [player, setPlayer] = useState(null)
    useEffect(() => {
        if (list) {
            console.log('list-------------', list)
            const { video } = list
            if (video.endsWith('.mp4')) {
                setTimeout(() => {
                    !player && setPlayer(new Player({
                        el: document.querySelector('.video_big_2021_1_6_12_42_22'),
                        // url: 'http://oss.cogo.club/9888644b-973f-4c71-94d0-249799e746ed.mp4',
                        url: video,
                        width: '100vw',
                        // height: '100%',
                        height: '100vh',
                        // 首帧当封面
                        videoInit: true,
                        // 自动播放视频
                        autoplay: true,
                        // controlsList: ['nofullscreen'],
                        // ignores: ['fullscreen']
                    }))
                }, 100)
            }
        }
        // eslint-disable-next-line
    }, [list])
    const onPause = () => {
        console.log('onPause')
        // const xgplayer_pc = document.querySelector('.xgplayer-pc')
        // xgplayer_pc.classList.remove('customdom')
    }
    const onPlay = () => {
        console.log('onPlay')
        const xgplayer_pc = document.querySelector('.xgplayer-pc')
        xgplayer_pc.classList.add('customdom')
    }
    useEffect(() => {
        if (player) {
            const dom = document.querySelector('.videoBox')
            setTimeout(() => {
                console.log('domdomdom', dom.querySelector('.xgplayer-skin-default'))
                const defDom = dom.querySelector('.xgplayer-skin-default')
                defDom.style.background = '#EDF0F0'

                player.on('pause', onPause).on('play', onPlay).on('requestFullscreen', () => {
                    console.log('进入全屏')
                    const fullscreendom = document.querySelector('.xgplayer-fullscreen')
                    // https://oss.fabrique.cn/f670fcc6-41d1-457e-8e43-0d1a42fe6e84.png

                    // https://oss.fabrique.cn/d27e87e8-b63c-4c74-9ae8-8aa5f9973783.png
                    fullscreendom.innerHTML = '<div class="xgplayer-icon"><img src="https://oss.fabrique.cn/f670fcc6-41d1-457e-8e43-0d1a42fe6e84.png" style="display: block;width: 100%;transform: scale(0.6)" /></div>'


                }).on('exitFullscreen', () => {
                    const fullscreendom = document.querySelector('.xgplayer-fullscreen')
                    // https://oss.fabrique.cn/f670fcc6-41d1-457e-8e43-0d1a42fe6e84.png

                    // https://oss.fabrique.cn/d27e87e8-b63c-4c74-9ae8-8aa5f9973783.png

                    fullscreendom.innerHTML = '<div class="xgplayer-icon"><img src="https://oss.fabrique.cn/d27e87e8-b63c-4c74-9ae8-8aa5f9973783.png" style="display: block;width: 100%;transform: scale(0.6)" /></div>'
                    console.log('退出全屏')
                })
            }, 0)
        }
    }, [player])
    // 变更播放器图标
    useEffect(() => {
        console.log(123456)
        setTimeout(() => {
            if (player) {
                const startdom = document.querySelector('.xgplayer-start')
                const splaydom = document.querySelector('.xgplayer-play')
                const playeddom = document.querySelector('.xgplayer-progress-played')
                const volumedom = document.querySelector('.xgplayer-volume')
                const cachedom = document.querySelector('.xgplayer-progress-cache')
                const icondom = document.querySelector('.xgplayer-icon')
                const fullscreendom = document.querySelector('.xgplayer-fullscreen')
                const controlsdom = document.querySelector('.xgplayer-controls')
                // const xgplayer_pc = document.querySelector('.xgplayer-pc')
                // const loadingdom = document.querySelector('.xgplayer-loading')
                const replaydom = document.querySelector('.xgplayer-replay')
                const loadingdom = document.querySelector('.xgplayer-loading')
                const spinnerdom = document.querySelector('.xgplayer-enter-spinner')
                    // width: 61.25vw;
                if (startdom) {
                    startdom.innerHTML = '<img src="https://oss.fabrique.cn/558d410d-cac7-4960-ad63-c905c57c08aa.png" style="display: block;width: 100%" />'
                    splaydom.style.display = 'none'
                    cachedom.style.background= 'rgba(255,255,255,0.29)'
                    playeddom.style.backgroundImage = 'linear-gradient(-90deg,#FFF, #FFF)'
                    volumedom.style.display = 'none'
                    icondom.style.background = 'red'
                    fullscreendom.innerHTML = '<div class="xgplayer-icon"><img src="https://oss.fabrique.cn/d27e87e8-b63c-4c74-9ae8-8aa5f9973783.png" style="display: block;width: 100%;transform: scale(0.6)" /></div>'
                    // controlsdom.style.backgroundImage = 'linear-gradient(to top, red , yellow)'
                    // controlsdom.style.backgroundImage = 'linear-gradient(to top, rgba(0,0,0,.3) , rgba(0,0,0,0))'
                    controlsdom.style.backgroundImage = 'none'
                    controlsdom.style.width = '61.25vw'
                    controlsdom.style.margin = '0 auto'
                    // console.log('controlsdom.clientHeight', controlsdom.clientHeight);
                    // xgplayer_pc.className = `${xgplayer_pc.className} customdom`
                    // replaydom.innerHTML = '<img src="https://oss.fabrique.cn/0b93f715-25b4-41e1-8817-a0bbeb62fac0.png" style="width: 78px;height: 78px" />'
                    loadingdom.getElementsByTagName('svg')[0].style.width = '70px'
                    loadingdom.getElementsByTagName('svg')[0].style.height = '70px'
                    spinnerdom.style.width = '35px'
                    spinnerdom.style.height = '35px'

                    replaydom.innerHTML = '<img src="https://oss.fabrique.cn/558d410d-cac7-4960-ad63-c905c57c08aa.png" style="width: 50px;height: 50px" />'
                    replaydom.addEventListener('click', () => {
                        player.play()
                    })
                }
            }
        })
    }, [player])

    useEffect(() => {
        // 定位到顶部
        document.getElementById('detail_2021_1_6_20_14_26').scrollIntoView()
        setTimeout(() => {
            // 定位到顶部
            document.body.scrollTop=document.documentElement.scrollTop=0
            console.log('定位到顶部')
            document.getElementById('detail_2021_1_6_20_14_26').scrollIntoView()
        }, 600)
    }, [player])

    const el = useRef(null)
    const [activeIndex, setActiveIndex] = useState(1)
    const move = (mark = 'next') => {
        const { swiper } = el.current
        mark === 'next' ? swiper.slideNext() : swiper.slidePrev()
        // setActiveIndex(swiper.realIndex)
    }

    const [tip, setTip] = useState(intl.get('detail_tips')[props.list.index])

    const changeLang = () => {
        const lang = intl.options.currentLocale;
        intl.options.currentLocale = lang === 'zh' ? 'en' : 'zh';
        setTip(intl.get('detail_tips')[props.list.index])
    }
    return (
        <>
            <div id="detail_2021_1_6_20_14_26">
                <Banner links={links} changeLang={changeLang} />
                <div className="subpage_desginer_box">

                    { props.list.video.endsWith('.mp4') ? (
                        <div className="videoBox" style={{zIndex: 1}}>
                            <div className="video_big_2021_1_6_12_42_22" />
                        </div>
                    ) : (
                        <div className="header_image">
                            <img src={props.list.video} alt=""/>
                        </div>
                    ) }

                    <div className="description" style={ordinary}>
                        { tip }
                    </div>
                    <div className="loop">
                        <header className="header" style={style}>{intl.get('detail_swiper_title')}</header>
                        <main className="main">
                            <div className="bar">
                                <div className="btn left" onClick={ () => move('pre')} />
                            </div>
                            <div className="swiper">
                                { list ? <CustomBigSwiper list={list} ref={el} setActiveIndex={setActiveIndex} slidesPerView={2.94} /> : null }
                            </div>
                            <div className="bar">
                                <div className="btn right" onClick={() => move('next')} />
                            </div>
                        </main>
                        <div className='custompagination' style={ordinary}>{activeIndex + 1}/{list && list.opus.length + 1}</div>
                    </div>
                </div>
            </div>
            <style jsx='true'>{`
              .customdom {
                position: relative;
              }
              .customdom::after {
                content: '';
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                height: 40px;
                //background-color: red;
                background-image: linear-gradient(to top, rgba(0,0,0,.3) , rgba(0,0,0,0));
              }
              .subpage_desginer_box{
                background-color: #EDF0F0;
                padding-bottom: 10.9375vw;
                padding-top: 80px;
              }
              .header_image {
                width: 100%;
              }
              .header_image img{
                display: block;
                width: 100%;
              }
              .videoBox {
                margin: 0 auto;
                display: flex;
                align-items: center;
                justify-content: center;
                //min-height: 56.25vw;
                width: 100%;
                background-color: #EDF0F0;
              }
              .description {
                font-size: 1.146vw;
                font-weight: 300;
                color: #031C24;
                width: 61.25vw;
                margin: 0 auto;
                padding-top: 3.229vw;
                line-height: 1.875vw;
                padding-bottom: 6.25vw;
              }
              .loop{ }
              .loop .header{
                font-size: 3.125vw;
                font-weight: bold;
                color: #031C24;
                text-align: center;
              }
              .loop .main {
                //width: 61.25vw;
                width: 75.833vw;
                height: 31.25vw;
                margin: 0 auto;
                margin-top: 6.25vw;
                display: flex;
                align-items: center;
              }
              .loop .main .bar {
                width: 2.604vw;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
              }
              .loop .main .bar:first-of-type{
                margin-right: 4.6875vw;
              }
              .loop .main .bar:last-of-type{
                margin-left: 4.6875vw;
              }
              .loop .main  .btn{
                width: 2.604vw;
                height: 5.208vw;
                cursor: pointer;
                transition: all .5s;
              }
              .loop .main .bar .btn:hover {
                transform: scale(1.5);
              }
              .main .bar .left{
                background: url("http://oss.cogo.club/d01887ef-ad10-46fe-b3cf-8fdaab5cc064.png") no-repeat center;
                background-size: 100%;
              }
              .main .bar .right{
                background: url("http://oss.cogo.club/6c88f47a-e64c-482d-80d5-d8f2582b187a.png") no-repeat center;
                background-size: 100%;
              }
              .main .swiper {
                width: 61.25vw;
                height: 100%;
              }
              .custompagination {
                text-align: center;
                font-size: 1.5625vw;
                font-weight: 300;
                color: #031C24;
              }
            `}</style>
        </>
    )
}

const Small = (props) => {
    const { clientWidth } = useContext(Resize)
    const [player, setPlayer] = useState(null)
    const [list, setList] = useState(null)

    useEffect(() => {
        if (props.list) {
            props.list && setList(props.list)
        }
    }, [props.list])

    useEffect(() => {
        if (list) {
            const timer = setTimeout(() => {
                if (player) {
                    // player.destroy()
                } else {
                    const { video } = list
                    video.endsWith('.mp4') && setPlayer(new Player({
                        el: document.querySelector('.video_2021_1_6'),
                        url: video,
                        fitVideoSize: 'fixWidth',
                        width: clientWidth,
                        videoInit: true,
                        // 自动播放视频
                        autoplay: true,
                        'x5-video-player-type': 'h5',
                        playsinline: true,
                        'x5-video-player-fullscreen': false,
                        controlsList: ['nofullscreen'],
                        ignores: ['fullscreen']
                        // cssFullscreen: true
                    }))
                }
            }, 50)
            return () => clearTimeout(timer)
        }
        // eslint-disable-next-line
    }, [clientWidth, list])
    useEffect(() => {
        setTimeout(() => {
            if (player) {
                const startdom = document.querySelector('.xgplayer-start')
                const splaydom = document.querySelector('.xgplayer-play')
                const playeddom = document.querySelector('.xgplayer-progress-played')
                const volumedom = document.querySelector('.xgplayer-volume')
                const cachedom = document.querySelector('.xgplayer-progress-cache')
                const icondom = document.querySelector('.xgplayer-icon')
                // const fullscreendom = document.querySelector('.xgplayer-fullscreen')
                const controlsdom = document.querySelector('.xgplayer-controls')
                const replaydom = document.querySelector('.xgplayer-replay')
                const loadingdom = document.querySelector('.xgplayer-loading')
                const spinnerdom = document.querySelector('.xgplayer-enter-spinner')
                if (startdom) {
                    startdom.innerHTML = '<img src="https://oss.fabrique.cn/558d410d-cac7-4960-ad63-c905c57c08aa.png" style="display: block;width: 50px;height: 50px;" />'
                    startdom.style.width = '50px'
                    startdom.style.height = '50px'
                    startdom.style.background = 'none'
                    startdom.style.boxSizing = 'borderBox'
                    splaydom.style.display = 'none'
                    cachedom.style.background= 'rgba(255,255,255,0.29)'
                    playeddom.style.backgroundImage = 'linear-gradient(-90deg,#FFF, #FFF)'
                    volumedom.style.display = 'none'
                    icondom.style.background = 'red'
                    // fullscreendom.innerHTML = '<div class="xgplayer-icon"><img src="https://oss.fabrique.cn/d27e87e8-b63c-4c74-9ae8-8aa5f9973783.png" style="display: block;width: 100%;transform: scale(0.6)" /></div>'
                    // controlsdom.style.backgroundImage = 'linear-gradient(to top, red , yellow)'
                    controlsdom.style.backgroundImage = 'linear-gradient(to top, rgba(0,0,0,.3) , rgba(0,0,0,0))'
                    // replaydom.innerHTML = '<img src="https://oss.fabrique.cn/0b93f715-25b4-41e1-8817-a0bbeb62fac0.png" style="width: 50px;height: 50px" />'
                    replaydom.innerHTML = '<img src="https://oss.fabrique.cn/558d410d-cac7-4960-ad63-c905c57c08aa.png" style="width: 50px;height: 50px" />'
                    replaydom.addEventListener('click', () => {
                        player.play()
                    })
                    spinnerdom.style.width = '20px'
                    spinnerdom.style.height = '20px'
                }

                console.log(document.getElementsByTagName('video')[0])
                document.addEventListener('WeixinJSBridgeReady', () => {
                    document.getElementsByTagName('video')[0].play()
                })
            }
        })
    }, [player])


    useEffect(() => {
        // 定位到顶部
        document.getElementById('top_2021_1_6_18_18_51').scrollIntoView()
        setTimeout(() => {
            // 定位到顶部
            document.body.scrollTop=document.documentElement.scrollTop=0
            console.log('定位到顶部')
            document.getElementById('top_2021_1_6_18_18_51').scrollIntoView()
        }, 600)
    }, [player])
    const [tip, setTip] = useState(intl.get('detail_tips')[props.list.index])
    const [ links ] = useState([
        { title: '首页', hoverTitle: 'HOME', href: '#', hoverStatus: true },
        {
            title: '关于我们',
            hoverTitle: 'About Us',
            href: '#aboutus',
            hoverStatus: false
        },
        {
            title: '我们的业务',
            hoverTitle: 'What We Do',
            href: '#business',
            hoverStatus: false
        },
        {
            title: 'Fabrique App',
            hoverTitle: 'Our App',
            href: '#fabrique_app',
            hoverStatus: false
        },
        {
            title: '品牌资源',
            hoverTitle: 'Brand Resources',
            href: '#brandandmedia',
            hoverStatus: false
        },
        {
            title: '联系我们',
            hoverTitle: 'Contact Us',
            href: '#contact',
            hoverStatus: false
        }
    ])
    const [ordinary, setOrdinary] = useState(null)
    const [style, setStyle] = useState(null)
    useEffect(() => {
        setOrdinary({
            fontFamily: intl.options.currentLocale == 'zh' ? 'SourceLight' : 'MontserratLighter'
        })
        setStyle({
            fontFamily: intl.options.currentLocale == 'zh' ? 'Source' : 'Ogg',
            fontWeight: intl.options.currentLocale == 'zh' ? 'bolder' : 'lighter'
        })
    }, [intl.options.currentLocale])
    const changeLang = () => {
        const lang = intl.options.currentLocale;
        intl.options.currentLocale = lang === 'zh' ? 'en' : 'zh';
        setTip(intl.get('detail_tips')[props.list.index])
    }
    return (
        <>
            <div id="top_2021_1_6_18_18_51" />
            <section className='asd_20211615_38_54'>
                <Banner changeLang={changeLang} key="detail_s152123" />
                <div className="box_own_20210103">

                    { list && list.video.endsWith('.mp4') ? (
                        <div className='video_2021_1_6' id='mse' style={{zIndex: 1}} />
                    ) : (
                        <div className='header_top_image'>
                            <img src={list && list.video} alt=""/>
                        </div>
                    )}
                    <main className='main'>
                        <div className="header">
                            <img src={list && list.logo} alt=""/>
                        </div>
                        <article className='article' style={ordinary}>
                            {tip}
                        </article>
                    </main>
                </div>
                { list && <CustomSmallSwiper list={list} /> }
                <div className='nothing'>
                    <p id="home" />
                    <p id="aboutus" />
                    <p id="business" />
                    <p id="fabrique_app" />
                    <p id="hezuoshejishi" />
                    <p id="pinpaiziyuan" />
                    <p id="medium" />
                    <p id="contact" />
                </div>
            </section>
            <style jsx='true'>{`    
                .asd_20211615_38_54 {
                  width: 100vw;
                  overflow: hidden;
                  padding-top: 40px;
                }            
                .box_own_20210103{
                  width: 100vw;
                }
                .box_own_20210103 .video{
                  width: 100vw;
                  height: auto;
                }
                .box_own_20210103 .header_top_image {
                  width: 100%;
                }
                .box_own_20210103 .header_top_image img {
                  display: block;
                  width: 100%;
                }
                .box_own_20210103 .main{
                  background-color: #031C24;
                  padding-bottom: 12vw;
                  overflow: hidden;
                }
                .box_own_20210103 .main .header{
                  //width: 54.67vw;
                  //height: 34.13vw;
                  //background-color: #282c34;
                  //margin-top: 8vw;
                  //margin-left: 7.47vw;
                }
                .box_own_20210103 .main .header img{
                  width: 100%;
                  display: block;
                }
                .box_own_20210103 .main .article{
                  font-size: 3.73vw;
                  font-weight: 300;
                  color: #FFFFFF;
                  line-height: 8vw;
                  margin-left: 14.67vw;
                  margin-right: 7.47vw;
                  transform: translateY(-4em);
                }
                .nothing {
                  display: none;
                }
            `}</style>
        </>
    )
}


const Index = (props) => {
    const [index, setIndex] = useState(null)
    const [list, setList] = useState(null)
    useMemo(() => {
        const params = props.location.search.substr(1).split('&').map(item => item.split('='))
        console.log('params***---+++', params)
        let [key1, index] = params[0]
        setIndex(Number(index))
    }, [props.location.search])
    useMemo(() => { setList(allList[index]) }, [index])
    const { isBig  } = useContext(Resize)
    return (
        <>
            { isBig ? <Big list={list} /> : <Small list={list} /> }
        </>
    )
}

export default withRouter(Index)