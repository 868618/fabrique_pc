import React, {useEffect, useState, useContext, useRef, useMemo} from "react";
import Player from 'xgplayer';
// import '../../customstyle/.xgplayer/skin/index.js'
import Resize from "../../context/Resize";
import CustomBigSwiper from './components/CustomBigSwiper'
import CustomSmallSwiper from './components/CustomSmallSwiper'
import Banner from "../../components/Banner.test";
import allList from '../../asset/desginers'
import { withRouter } from 'react-router-dom'
import intl from "react-intl-universal";



const Big = (props) => {
    const [list, setList] = useState(null)
    useEffect(() => {
        if (props.list) {
            props.list && setList(props.list)
        }
    }, [props.list])
    const [player, setPlayer] = useState(null)
    useEffect(() => {
        !player && setPlayer(new Player({
            el: document.querySelector('.video'),
            // url: 'http://oss.cogo.club/9888644b-973f-4c71-94d0-249799e746ed.mp4',
            url: 'http://oss.cogo.club/72ac3010-e784-43ab-aa73-deb20068e48f.mp4',
            width: '100%',
            height: '100%',
            // 首帧当封面
            videoInit: true
        }))
        // eslint-disable-next-line
    }, [])
    const el = useRef(null)
    const [activeIndex, setActiveIndex] = useState(1)
    const move = (mark = 'next') => {
        const { swiper } = el.current
        mark === 'next' ? swiper.slideNext() : swiper.slidePrev()
        setActiveIndex(swiper.realIndex)
    }

    const [tip, setTip] = useState(intl.get('detail_tips')[props.list.index])

    const changeLang = () => {
        const lang = intl.options.currentLocale;
        intl.options.currentLocale = lang === 'zh' ? 'en' : 'zh';
        setTip(intl.get('detail_tips')[props.list.index])
    }
    return (
        <>
            <Banner changeLang={changeLang} />
            <div className="subpage_desginer_box">
                <div className="videoBox" style={{zIndex: 1}}>
                    <div className="video" />
                </div>
                <div className="description">
                    { tip }
                </div>
                <div className="loop">
                    <header className="header">{intl.get('detail_swiper_title')}</header>
                    <main className="main">
                        <div className="bar">
                            <div className="btn left" onClick={ () => move('pre')} />
                        </div>
                        <div className="swiper">
                            { list && <CustomBigSwiper list={list} ref={el} setActiveIndex={setActiveIndex} slidesPerView={2.94} /> }
                        </div>
                        <div className="bar">
                            <div className="btn right" onClick={() => move('next')} />
                        </div>
                    </main>
                    <div className='custompagination'>{activeIndex + 1}/{list && list.opus.length}</div>
                </div>
            </div>
            <style jsx='true'>{`
              .subpage_desginer_box{
                background-color: #EDF0F0;
                padding-bottom: 10.9375vw;
              }
              .videoBox {
                margin: 0 auto;
                display: flex;
                align-items: center;
                justify-content: center;
                min-height: 56.25vw;
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
        const timer = setTimeout(() => {
            if (player) player.destroy(false)
            setPlayer(new Player({
                el: document.querySelector('.video'),
                url: 'https://oss.fabrique.cn/1e291390-4db7-422b-8dd7-36173c4fa730.mp4',
                fitVideoSize: 'fixWidth',
                width: clientWidth,
                videoInit: true
            }))
        }, 100)
        return () => clearTimeout(timer)
        // eslint-disable-next-line
    }, [clientWidth])
    useEffect(() => {
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
                if (startdom) {
                    startdom.innerHTML = '<img src="https://oss.fabrique.cn/558d410d-cac7-4960-ad63-c905c57c08aa.png" style="display: block;width: 100%" />'
                    splaydom.style.display = 'none'
                    cachedom.style.background= 'rgba(255,255,255,0.29)'
                    playeddom.style.backgroundImage = 'linear-gradient(-90deg,#FFF, #FFF)'
                    volumedom.style.display = 'none'
                    icondom.style.background = 'red'
                    fullscreendom.innerHTML = '<div class="xgplayer-icon"><img src="https://oss.fabrique.cn/d27e87e8-b63c-4c74-9ae8-8aa5f9973783.png" style="display: block;width: 100%;transform: scale(0.6)" /></div>>'
                    // controlsdom.style.backgroundImage = 'linear-gradient(to top, red , yellow)'
                    controlsdom.style.backgroundImage = 'linear-gradient(to top, rgba(0,0,0,.3) , rgba(0,0,0,0))'
                }
            }
        })
    }, [player])
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

    return (
        <>
            <Banner links={links} />
            <div className="box_own_20210103">
                <div className='video' id='mse' style={{zIndex: 1}} />
                <main className='main'>
                    <div className="header">
                        <img src={list && list.logo} alt=""/>
                    </div>
                    <article className='article'>
                        法国设计师Philippe Perisse（菲利普·佩里斯）先后在⾼定时装屋Scherrer和John Galliano⼯作，曾被欧莱雅邀请加⼊并负责Lancome和Armani彩妆全系列产品开发。他认为服装是女性的铠甲，强调自己只为有力量的独立女性设计服装。
                        Philippe Perisse × Fabrique 联名系列灵感来源于Philippe Perisse品牌本身DNA—— 都市探险家。
                        整个系列体现了军装风格的两个特点：极具功能性与造型感，既呈现女性的魅力，又带有男性的帅气。
                    </article>
                </main>
            </div>
            { list && <CustomSmallSwiper list={list} /> }
            <style jsx='true'>{`                
                .box_own_20210103{
                  width: 100vw;
                }
                .box_own_20210103 .video{
                  width: 100vw;
                  height: auto;
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
                  margin-top: 8vw;
                  margin-left: 7.47vw;
                }
                .box_own_20210103 .main .article{
                  font-size: 3.73vw;
                  font-weight: 300;
                  color: #FFFFFF;
                  line-height: 8vw;
                  margin-left: 14.67vw;
                  margin-right: 7.47vw;
                  transform: translateY(-2em);
                }
            `}</style>
        </>
    )
}


const Index = (props) => {
    const [index, setIndex] = useState(null)
    const [list, setList] = useState(null)
    useMemo(() => {
        const obj = Object.fromEntries(props.location.search.substr(1).split('&').map(item => item.split('=')))
        setIndex(Number(obj.index))
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