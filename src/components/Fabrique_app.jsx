import React, { useState } from 'react';
import intl from "react-intl-universal";
// import intl from 'react-intl-universal';
import('../style/fabrique_app/index.css')

function Fabrique_app() {
    const [isShow, setIsShow] = useState(intl.options.currentLocale);
    const family = intl.options.currentLocale == 'zh' ? 'Source' : 'Ogg'
    const family2 = intl.options.currentLocale == 'zh' ? 'Source' : 'MontserratLighter'
    const style = {
        fontFamily: family,
        fontWeight: intl.options.currentLocale == 'zh' ? 'border': 'lighter'
    }
    const style2 = {
        fontFamily: 'Ogg'
    }
    // const ordinary = {
    //     fontFamily: intl.options.currentLocale == 'zh' ? 'SourceLight' : 'MontserratLighter',
    //     fontWeight:  'lighter'
    // }

    const ordinary = Object.assign({
        fontFamily:
            intl.options.currentLocale == 'zh' ? 'SourceLight' : 'MontserratLighter',
    }, intl.options.currentLocale == 'zh' ? {} : {maxWidth: '100%'})
    return (
        <div className='fabrique_app' id='fabrique_app'>
            <header className='fabrique_app_header'>
                <h1 className='fabrique_app_title' style={style2}>{intl.get('FABRIQUE_APP')}</h1>
                <div className="fabrique_app-subname">
                    <img src="https://oss.guangmangapp.com/3169ec1d-96da-4fb1-8cac-ecafd2c1717c.png" alt=""/>
                </div>

                <div className='fabrique_app-slogan'>
                    <p style={ordinary}>{intl.get('FABRIQUE_APP_1')}</p>
                    {/*<p>{intl.get('FABRIQUE_APP_2')}</p>*/}
                    {/*<p>{intl.get('FABRIQUE_APP_3')}</p>*/}
                    {/*<p>{intl.get('FABRIQUE_APP_4')}</p>*/}
                </div>
            </header>


            <div className='fabrique_app_item_left'>
                <div className='left_left_item'>
                    <div className='text-item'>
                        <p className='text-item-title' style={style}>{ intl.get('FABRIQUE_APP_item_1') }</p>
                        <span className='line'></span>
                        <div className='text-item-contain'>
                            <p style={ordinary}>{intl.get('FABRIQUE_APP_item_1_1')}</p>
                            <p style={ordinary}>{intl.get('FABRIQUE_APP_item_1_2')}</p>
                        </div>
                    </div>
                </div>
                <div className='left_right_item'>
                    <img src="http://oss.cogo.club/6fb3b97c-4cff-4b43-8d09-91bc8af4f7a6.png" alt=""/>
                </div>
            </div>

            <div className='fabrique_app_item_right'>
                <div className='right_left_item'>
                    <img src="http://oss.cogo.club/e5941b05-cf95-48a2-a8fc-f73b2c6a724b.png" alt=""/>
                </div>
                <div className='right_right_item'>
                    <div className='text-item'>
                        <p className='text-item-title' style={style}>{ intl.get('FABRIQUE_APP_item_2') }</p>
                        <span className='line'></span>
                        <div className='text-item-contain'>
                            <p style={ordinary}>{ intl.get('FABRIQUE_APP_item_2_1') }</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='fabrique_app_item_left'>
                <div className='left_left_item'>
                    <div className='text-item'>
                        <p className='text-item-title' style={style}>{ intl.get('FABRIQUE_APP_item_3') }</p>
                        <span className='line'></span>
                        <div className='text-item-contain'>
                            <p style={ordinary}>{ intl.get('FABRIQUE_APP_item_3_1') }</p>
                        </div>
                    </div>
                </div>
                <div className='left_right_item'>
                    <img src="http://oss.cogo.club/853f2f2f-786d-4950-a36a-41bceb0c6ca6.png" alt=""/>
                </div>
            </div>

            <div className='fabrique_app_item_right'>
                <div className='right_left_item'>
                    <img src="http://oss.cogo.club/7da25605-8cbd-4c4c-be62-2dc9844c0cc1.png" alt=""/>
                </div>
                <div className='right_right_item'>
                    <div className='text-item'>
                        <p className='text-item-title' style={style}>{ intl.get('FABRIQUE_APP_item_4') }</p>
                        <span className='line'></span>
                        <div className='text-item-contain'>
                            <p style={ordinary}>{ intl.get('FABRIQUE_APP_item_4_1') }</p>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )

}
export default Fabrique_app
