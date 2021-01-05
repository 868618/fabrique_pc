import React from "react";
import Banner from "./Banner.test";
import About from "./About";
import Business from "./Business";
import Fabrique_app from "./Fabrique_app";
import Brand from "./Brand";
import Footer from "./Footer";
import Home from './Home'
import intl from "react-intl-universal";


class Index extends React.Component {
    constructor(props) {
        super(props);
        this.changeLang = this.changeLang.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            links: [
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
            ],
            isScroll: true,
            index: 0
        };
    }
    getDoms () {
        console.log('window.screen.height', window.screen.height)
        const list = ['banner', 'aboutus', 'business', 'fabrique_app', 'brand', 'medium', 'contact'];
        let height = 0
        let arr = []
        list.map(item => {
            const dom = document.getElementById(item)
            const rect = dom.getBoundingClientRect();
            height += dom.offsetHeight
        })
    }
    componentDidMount() {
        if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
            document.getElementById('video').remove();
        }
        const list = ['aboutus', 'business', 'fabrique_app', 'brandandmedia', 'contact'];
        let temp1 = 0;
        window.onscroll = e => {
            if (!this.state.isScroll) return;
            // console.log('window.onscroll+++++++++')
            // this.getDoms()
            let num = 0;
            const result = list.map((item, index) => {
                const dom =
                    item !== 'contact'
                        ? document.getElementById(item)
                        : document.querySelector('.footer-wrap');
                const rect = dom && dom.getBoundingClientRect();
                return {
                    num: index + 1,
                    top: rect && rect.top,
                    bottom: rect && rect.bottom
                };
            });
            if (document.documentElement.scrollTop - temp1 > 0) {
                const tt = result.filter(item => item.top > -20 && item.top < 20);
                num = tt.length > 0 && tt[0].num;
            } else {
                const tt = result.filter(item => item.bottom > -20 && item.bottom < 20);
                num = tt.length > 0 && tt[0].num;
            }
            temp1 = document.documentElement.scrollTop;

            if (document.documentElement.scrollTop <= 100) {
                this.handleClick(0);
                return;
            }
            num > 0 && this.handleClick(num);
        };
    }

    changeLang() {
        const lang = intl.options.currentLocale;
        intl.options.currentLocale = lang === 'zh' ? 'en' : 'zh';
        this.forceUpdate();
    }

    handleClick(index) {
        this.setState({
            isScroll: false
        })
        console.log('index-------------', index)
        this.setState({
            index
        })
        if (index == 6) return
        const temp = JSON.parse(JSON.stringify(this.state.links));
        for (let i = 0; i < temp.length; i++) {
            temp[i].hoverStatus = false;
        }
        temp[index].hoverStatus = true;
        this.setState({
            links: temp
        })
        setTimeout(() => {
            this.setState({
                isScroll: true
            })
        }, 200)
    }

    render() {
        return (
            <>
                <div className='App'>
                    <Banner changeLang={this.changeLang} index={this.state.index} />
                    <Home />
                    <About />
                    <Business />
                    <Fabrique_app />
                    <Brand />
                    <Footer />
                </div>
            </>
        )
    }
}

export default Index