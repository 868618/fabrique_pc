import React, {useEffect, useState, useContext, useRef} from "react";
import Player from 'xgplayer';
import Resize from "../../context/Resize";
import CustomBigSwiper from './components/CustomBigSwiper'
import CustomSmallSwiper from './components/CustomSmallSwiper'

// const testCss = require('../style/test.css')

const Big = () => {
    const list = [
        {
            face: "https://oss.fabrique.cn/5a46181a-cdb9-4fa3-8bf1-ede447738466.jpg",
            back: "https://oss.fabrique.cn/6fa89592-b0a2-4bd8-8e15-3de8f93a88d5.jpg",
            name: "Stephane Rolland"
        },
        {
            face: "https://oss.fabrique.cn/b6bf4fd0-4f55-45bf-86b0-e2c1a209b6f6.jpg",
            back: "https://oss.fabrique.cn/ef4b0578-3eb9-431e-af8f-0f115062fbb2.jpg",
            name: "Philippe Perisse"
        },
        {
            face: "https://oss.fabrique.cn/88965ff2-a272-4dd5-95ed-b1b2e14a5dfc.jpg",
            back: "https://oss.fabrique.cn/40f34fc3-8f64-4b6d-9c32-2c4a88b67778.jpg",
            name: "Alex Rotin"
        },
        {
            face: "https://oss.fabrique.cn/bb33e25e-dfae-4324-bef9-aef86541a9e2.jpg",
            back: "https://oss.fabrique.cn/566a7dc2-488a-4dbb-b017-1236ab7e2043.jpg",
            name: "Pascal Millet"
        },
        {
            face: "https://oss.fabrique.cn/86e9c76d-8ccf-48dd-ab8a-21d63559cb79.jpg",
            back: "https://oss.fabrique.cn/66166e83-04d5-49ef-8c17-b6500bfae226.jpg",
            name: "Carlos Campos"
        },
        {
            face: "https://oss.fabrique.cn/f243e8a8-16e3-4c32-a4e1-ba057f9677f2.jpg",
            back: "https://oss.fabrique.cn/9be08f40-8dbc-44f1-8769-77603d614579.jpg",
            name: "Lee Seong Dong"
        },
        {
            face: "https://oss.fabrique.cn/341a757d-4249-4b36-8a9e-b9764ac0e37f.jpg",
            back: "https://oss.fabrique.cn/f9551f19-a682-4d34-a9a1-012b3bff1bb2.jpg",
            name: "Cosima Christa"
        },
        {
            face: "https://oss.fabrique.cn/aae94313-f24d-4fbe-b214-971ec813c54e.jpg",
            back: "https://oss.fabrique.cn/6c536518-49fa-4dc8-85fd-037d9c013b81.jpg",
            name: "XUZHI"
        },
        {
            face: "https://oss.fabrique.cn/5d257807-aaca-43a2-a4ae-86af2c152a26.jpg",
            back: "https://oss.fabrique.cn/df4cfd4b-1f1c-43e4-a739-f304e57f030b.jpg",
            name: "Joash Teo"
        },
        {
            face: "https://oss.fabrique.cn/c655b072-e620-417b-8254-063cac72ad2f.jpg",
            back: "https://oss.fabrique.cn/e168c869-4f41-4504-9910-c6027f183bf3.jpg",
            name: "Vivienne Tam"
        }
    ]
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
    return (
        <>
            <div className="subpage_desginer_box">
                <div className="videoBox">
                    <div className="video" />
                </div>
                <div className="description">
                    法国设计师Philippe Perisse（菲利普·佩里斯）先后在⾼定时装屋Scherrer和John Galliano⼯作，曾被欧莱雅邀请加⼊并负责Lancome和Armani彩妆全系列产品开发。他认为服装是女性的铠甲，强调自己只为有力量的独立女性设计服装。
                    Philippe Perisse × Fabrique 联名系列灵感来源于Philippe Perisse品牌本身DNA—— 都市探险家。
                    整个系列体现了军装风格的两个特点：极具功能性与造型感，既呈现女性的魅力，又带有男性的帅气。
                </div>
                <div className="loop">
                    <header className="header">2020春夏联名系列</header>
                    <main className="main">
                        <div className="bar">
                            <div className="btn left" onClick={ () => move('pre')} />
                        </div>
                        <div className="swiper">
                            <CustomBigSwiper list={list} ref={el} setActiveIndex={setActiveIndex} slidesPerView={2.94} />
                        </div>
                        <div className="bar">
                            <div className="btn right" onClick={() => move('next')} />
                        </div>
                    </main>
                    <div className='pagination'>{activeIndex + 1}</div>
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
              .pagination {
                text-align: center;
                font-size: 1.5625vw;
                font-weight: 300;
                color: #031C24;
              }
            `}</style>
        </>
    )
}

const Small = () => {
    const { clientWidth } = useContext(Resize)
    const [player, setPlayer] = useState(null)
    const list = [
        {
            face: "https://oss.fabrique.cn/5a46181a-cdb9-4fa3-8bf1-ede447738466.jpg",
            back: "https://oss.fabrique.cn/6fa89592-b0a2-4bd8-8e15-3de8f93a88d5.jpg",
            name: "Stephane Rolland"
        },
        {
            face: "https://oss.fabrique.cn/b6bf4fd0-4f55-45bf-86b0-e2c1a209b6f6.jpg",
            back: "https://oss.fabrique.cn/ef4b0578-3eb9-431e-af8f-0f115062fbb2.jpg",
            name: "Philippe Perisse"
        },
        {
            face: "https://oss.fabrique.cn/88965ff2-a272-4dd5-95ed-b1b2e14a5dfc.jpg",
            back: "https://oss.fabrique.cn/40f34fc3-8f64-4b6d-9c32-2c4a88b67778.jpg",
            name: "Alex Rotin"
        },
        {
            face: "https://oss.fabrique.cn/bb33e25e-dfae-4324-bef9-aef86541a9e2.jpg",
            back: "https://oss.fabrique.cn/566a7dc2-488a-4dbb-b017-1236ab7e2043.jpg",
            name: "Pascal Millet"
        },
        {
            face: "https://oss.fabrique.cn/86e9c76d-8ccf-48dd-ab8a-21d63559cb79.jpg",
            back: "https://oss.fabrique.cn/66166e83-04d5-49ef-8c17-b6500bfae226.jpg",
            name: "Carlos Campos"
        },
        {
            face: "https://oss.fabrique.cn/f243e8a8-16e3-4c32-a4e1-ba057f9677f2.jpg",
            back: "https://oss.fabrique.cn/9be08f40-8dbc-44f1-8769-77603d614579.jpg",
            name: "Lee Seong Dong"
        },
        {
            face: "https://oss.fabrique.cn/341a757d-4249-4b36-8a9e-b9764ac0e37f.jpg",
            back: "https://oss.fabrique.cn/f9551f19-a682-4d34-a9a1-012b3bff1bb2.jpg",
            name: "Cosima Christa"
        },
        {
            face: "https://oss.fabrique.cn/aae94313-f24d-4fbe-b214-971ec813c54e.jpg",
            back: "https://oss.fabrique.cn/6c536518-49fa-4dc8-85fd-037d9c013b81.jpg",
            name: "XUZHI"
        },
        {
            face: "https://oss.fabrique.cn/5d257807-aaca-43a2-a4ae-86af2c152a26.jpg",
            back: "https://oss.fabrique.cn/df4cfd4b-1f1c-43e4-a739-f304e57f030b.jpg",
            name: "Joash Teo"
        },
        {
            face: "https://oss.fabrique.cn/c655b072-e620-417b-8254-063cac72ad2f.jpg",
            back: "https://oss.fabrique.cn/e168c869-4f41-4504-9910-c6027f183bf3.jpg",
            name: "Vivienne Tam"
        }
    ]
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

    return (
        <>
            <div className="box_own_20210103">
                <nav className='video' id='mse'></nav>
                <main className='main'>
                    <div className="header"></div>
                    <article className='article'>
                        法国设计师Philippe Perisse（菲利普·佩里斯）先后在⾼定时装屋Scherrer和John Galliano⼯作，曾被欧莱雅邀请加⼊并负责Lancome和Armani彩妆全系列产品开发。他认为服装是女性的铠甲，强调自己只为有力量的独立女性设计服装。
                        Philippe Perisse × Fabrique 联名系列灵感来源于Philippe Perisse品牌本身DNA—— 都市探险家。
                        整个系列体现了军装风格的两个特点：极具功能性与造型感，既呈现女性的魅力，又带有男性的帅气。
                    </article>
                </main>
            </div>
            <CustomSmallSwiper list={list} />
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
                  width: 54.67vw;
                  height: 34.13vw;
                  background-color: #282c34;
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

const Index = () => {
    const { isBig  } = useContext(Resize)
    return (
        <>
            { isBig ? <Big /> : <Small /> }
        </>
    )
}

export default Index