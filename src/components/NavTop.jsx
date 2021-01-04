import React, {useState} from "react";
import intl from "react-intl-universal";
import classnames from 'classnames';

const NavTop = (props) => {
    const [isShow, setIsShow] = useState(false);
    const Nav = classnames('nav', {
        show: isShow
    });
    const navMenu = classnames('nav-menu', { hide: isShow });
    const family = intl.options.currentLocale === 'zh' ? 'SourceRegular' : 'MontserratRegular';
    const style = {
        fontFamily: family,
        fontWeight: intl.options.currentLocale === 'zh' ? 'bolder' : 'lighter'
    };
    return (
        <>
            <div className='nav-top'>
                <div className='nav-wrap'>
                    <img
                        className='nav-inner-pic'
                        src='https://oss.guangmangapp.com/ef3f19aa-5c6e-46fb-93ce-83bebddb9ede.png'
                        alt=''
                    />
                    <img
                        onClick={() => setIsShow(true)}
                        className={navMenu}
                        src='https://oss.guangmangapp.com/c2f9b1df-8a30-4ebd-be61-9efec844f69b.png'
                        alt=''
                    />
                    <div className={Nav}>
                        <img
                            className='close'
                            onClick={() => setIsShow(false)}
                            src='https://oss.guangmangapp.com/733fbb3b-24cb-49c7-9239-b8202f22ea9e.png'
                            alt=''
                        />
                        <ul>
                            {props.links.map((item, index) => (
                                <li key={item.hoverTitle} style={style}>
                                    <a
                                        href={item.href}
                                        className={item.hoverStatus ? 'active' : ''}
                                        onClick={() => {
                                            setIsShow(false);
                                            props.handleClick(index);
                                        }}
                                    >
                                        {intl.options.currentLocale === 'zh' ? item.title : item.hoverTitle}
                                    </a>
                                </li>
                            ))}
                            <li style={style}>
                                {intl.options.currentLocale === 'zh' ? '简体中文' : 'English'}
                                <img
                                    src='https://oss.guangmangapp.com/e587f0d8-be81-4ddf-85f9-f6b2fd9ea361.png'
                                    alt=''
                                />
                                <div
                                    className='select-box'
                                    onClick={() => {
                                        props.changeLang();
                                        setIsShow(false);
                                    }}
                                >
                                    {intl.options.currentLocale === 'zh' ? 'English' : '简体中文'}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}


export default NavTop