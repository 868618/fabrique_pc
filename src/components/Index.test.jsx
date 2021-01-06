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
        this.state = {
            index: 0
        };
    }
    componentDidMount() {
        // const list = ['home', 'aboutus', 'business', 'fabrique_app', 'hezuoshejishi', 'pinpaiziyuan', 'medium', 'contact']
        const hash = this.props.location.pathname.substr(1)
        setTimeout(() => {
            window.location.href = `#${hash}`
        })
    }

    changeLang() {
        const lang = intl.options.currentLocale;
        intl.options.currentLocale = lang === 'zh' ? 'en' : 'zh';
        this.forceUpdate();
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