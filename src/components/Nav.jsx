import React, { useState } from "react";
import '../style/nav/index.scss'

const Nav = () => {
    const [logosrc] = useState('https://oss.guangmangapp.com/ef3f19aa-5c6e-46fb-93ce-83bebddb9ede.png')
    return (
        <>
            <div className="topnav">
                <div className="topnav_logo">
                    <img src={logosrc} alt=""/>
                </div>
                <div className="topnav_menus"></div>
            </div>
        </>
    )
}

export default Nav