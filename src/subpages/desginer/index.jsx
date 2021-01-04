import React, {useEffect, useState, useContext, useRef} from "react";
import Player from 'xgplayer';
import Resize from "../../context/Resize";
import CustomBigSwiper from './components/CustomBigSwiper'
import CustomSmallSwiper from './components/CustomSmallSwiper'
import Banner from "../../components/Banner";

// const testCss = require('../style/test.css')
const maps = new Map()
maps.set('alex', ["https://oss.fabrique.cn/2baa92e8-508c-4376-8c8b-dccb7f789917.jpg", "https://oss.fabrique.cn/7b8ee903-8ddc-40b3-b085-e24014820239.jpg", "https://oss.fabrique.cn/e04cb6d1-564e-41c2-a4f4-b1fc5ab7df70.jpg", "https://oss.fabrique.cn/56a4c5bb-9659-469d-a998-e68a4232a5c6.jpg", "https://oss.fabrique.cn/aeaf4143-174c-45a3-9915-fbe9dcf64c65.jpg"])
maps.set('carlos', ["https://oss.fabrique.cn/a8d13228-d515-404a-8af6-b89386d879a4.jpg", "https://oss.fabrique.cn/41e25b36-313f-472b-a1d8-0d87192fda41.jpg", "https://oss.fabrique.cn/176c063d-6358-4f78-9016-23e557abfb2b.jpg", "https://oss.fabrique.cn/bd923849-3060-46ca-acfb-48cdeb9687c7.jpg", "https://oss.fabrique.cn/0994f78f-7334-4a1c-af99-41db5d4ea9df.jpg", "https://oss.fabrique.cn/e44085b0-18e8-4dd1-9fc8-a58a328fc428.jpg"])
maps.set('jpk', ["https://oss.fabrique.cn/214dc542-f89d-4c4a-a692-0656a350db00.jpg", "https://oss.fabrique.cn/39032f41-69dd-4928-a4f2-ccb0f5b31478.jpg", "https://oss.fabrique.cn/719f596c-2558-4302-892e-4fa0ee826d56.jpg", "https://oss.fabrique.cn/ea6fe52f-6858-45d8-9654-9c786e3b0583.jpg", "https://oss.fabrique.cn/c8dba997-99c8-4b1b-b366-b8fc361cbe68.jpg", "https://oss.fabrique.cn/e078634a-70ea-4356-99c7-bbe95429f3c8.jpg"])
maps.set('otto', ["https://oss.fabrique.cn/72d7b1f1-4a50-4da3-a8c2-f695369d85c0.jpg", "https://oss.fabrique.cn/905601b2-f019-433e-b9a7-913fdcfad5b0.jpg", "https://oss.fabrique.cn/df15ddf3-7ed8-4bb8-a246-ce8352c7c484.jpg", "https://oss.fabrique.cn/0fd769fb-852b-47f0-8362-7ad17c2a5ad5.jpg", "https://oss.fabrique.cn/ac1c985c-5ddc-4098-a96c-87e7f4bc5a2d.jpg", "https://oss.fabrique.cn/9be866f7-3048-4277-9985-4482dd992eac.jpg", "https://oss.fabrique.cn/ae13d7b6-6f8d-48c9-889a-6573212edc7e.jpg", "https://oss.fabrique.cn/662c4ea5-545a-46d9-ad9c-e37226192f4b.jpg", "https://oss.fabrique.cn/6a94399d-f16d-47ab-92db-421cdc93e14f.jpg", "https://oss.fabrique.cn/9be5182a-316c-442e-a874-21fd3c491a7c.jpg", "https://oss.fabrique.cn/b5c2623d-43e6-441e-90b3-6f6841a26a09.jpg"])
maps.set('pm', ["https://oss.fabrique.cn/45a2693d-98cc-4d60-a621-0b07ff5bdebe.jpg", "https://oss.fabrique.cn/fd01cec7-4c02-4e6d-bf04-c85f9401c472.jpg", "https://oss.fabrique.cn/fd6f93f1-b2d9-4a46-afaa-12c329f496f9.jpg", "https://oss.fabrique.cn/0bcefd3b-763c-4d9a-8e71-4aa5cdafa365.jpg", "https://oss.fabrique.cn/292d2c24-b76a-4fdf-8b0e-bf89568c294e.jpg", "https://oss.fabrique.cn/08f636fb-e6e4-4683-9d52-e7a4f600c044.jpg"])
maps.set('pp', ["https://oss.fabrique.cn/9bb2b77e-7a0e-4e2b-898d-0cb361aa87c3.jpg", "https://oss.fabrique.cn/fb52bf6f-bf3f-4c72-9d14-76cf6a9d7533.jpg", "https://oss.fabrique.cn/23ec7d27-16a4-47bf-a2a7-b79c9bea3df3.jpg", "https://oss.fabrique.cn/b8377cb5-d19e-4be0-91c9-ab6ba613d1ef.jpg", "https://oss.fabrique.cn/cb97ce52-3591-4170-bd0f-d4407c146418.jpg"])
maps.set('vt', ["https://oss.fabrique.cn/39c6d141-2ef8-4d18-bd6f-8759d7050f5f.jpg", "https://oss.fabrique.cn/03e6f9e3-b63f-4658-9aba-67327b9430ff.jpg", "https://oss.fabrique.cn/fe18ae9e-09ec-41cc-8baf-0a3bac66de80.jpg", "https://oss.fabrique.cn/1a67bdde-e207-4395-9d92-0f7274536150.jpg", "https://oss.fabrique.cn/66f18171-bc13-4e21-be4a-9d791c79aa8a.jpg"])
maps.set('xuzhi',["https://oss.fabrique.cn/96c76f8b-a86b-4462-998d-f6a5f1fa0e52.jpg", "https://oss.fabrique.cn/58f20004-4726-4f6d-9ad7-0a3862c80416.jpg", "https://oss.fabrique.cn/c34c5982-5025-4cba-ae45-9559e9e7e1bc.jpg", "https://oss.fabrique.cn/34ba781d-9a1c-4c3f-90b0-c5456b90073e.jpg", "https://oss.fabrique.cn/1ff54812-152c-4353-b44f-3e441acb1af5.jpg", "https://oss.fabrique.cn/d89d91a5-dca5-46fd-b930-f472c3886cdd.jpg", "https://oss.fabrique.cn/e6767bdf-e83e-41f6-a417-16458f698f9b.jpg", "https://oss.fabrique.cn/480c2ce6-fa39-47c0-b54a-50fe4b9334a1.jpg"])
maps.set('lichengdong', ["https://oss.fabrique.cn/ed27d3d5-1756-4211-9531-bc95de388f9e.jpg", "https://oss.fabrique.cn/f1c3adaa-effb-4ea9-93ba-8c3f1b48badc.jpg", "https://oss.fabrique.cn/a8f799ad-4a63-4d96-babc-0d740431fd7c.jpg", "https://oss.fabrique.cn/d1b2cec1-4b0c-4054-a358-04e99a3e8b13.jpg", "https://oss.fabrique.cn/14950075-2903-46eb-b946-52ee49b168be.jpg", "https://oss.fabrique.cn/9fcbb56c-8461-4484-9c4d-f3533ea815c4.jpg", "https://oss.fabrique.cn/d14068e2-bf65-41d4-8758-6858698e38a2.jpg", "https://oss.fabrique.cn/8c604137-c3db-482d-ab7d-a1667c2cf534.jpg", "https://oss.fabrique.cn/d1ff7c20-30cb-45b4-b9c3-41a892cec7e7.jpg", "https://oss.fabrique.cn/f6e13fb2-b74a-4334-9b81-c87dc0b08ae7.jpg", "https://oss.fabrique.cn/cbc0b277-9f5c-411c-ad28-bac790087fc5.jpg", "https://oss.fabrique.cn/35b20781-240f-49a4-bb81-879de2756fdd.jpg", "https://oss.fabrique.cn/a90ac7c1-3df9-4a16-845f-8a38678c0d5c.jpg", "https://oss.fabrique.cn/75913424-3154-4880-999f-c5c2f9b23d8c.jpg", "https://oss.fabrique.cn/8702e451-f526-4d4b-9d69-afbc4a244a79.jpg"])
maps.set('luolan', ["https://oss.fabrique.cn/aebb4be9-5a61-4f42-ad6f-cfe2fc88ada7.jpg", "https://oss.fabrique.cn/6668ee55-3b4c-400d-b8c0-0131be92f38c.jpg", "https://oss.fabrique.cn/387c3f1f-4d4f-4ece-b534-d8e20ce4e2eb.jpg", "https://oss.fabrique.cn/163862dd-51cc-4322-b131-abb04a1fc058.jpg", "https://oss.fabrique.cn/4d92ab1c-120b-4d2a-8177-9450d3a0d26b.jpg"])

const Big = () => {
    console.log('mapsmapsmapsmapsmaps------------', maps)
    // const [allMaps, setMaps] = useEffect()
    // useEffect(() => {
    //     setMaps(maps)
    // }, [])

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
            <Banner />
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
                <div className='video' id='mse' style={{zIndex: 1}}></div>
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