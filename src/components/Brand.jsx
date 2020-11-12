import React, {useState} from 'react';
import intl from 'react-intl-universal';
import('../style/brand/index.css')

import Medium from './Medium';

function brand() {
    const [isShow, setIsShow] = useState(intl.options.currentLocale);
    const family = intl.options.currentLocale == 'zh' ? 'Source' : 'Ogg'
    const family2 = intl.options.currentLocale == 'zh' ? 'SourceLight' : 'MontserratLighter'
    const style = {
        fontFamily: family,
        fontWeight: intl.options.currentLocale == 'zh' ? 'border': 'lighter'
    }
    const style2 = {
        fontFamily: 'MontserratLighter'
    }

    const style3 = {
        fontFamily: family2
    }
    return (
        <div id="brandandmedia">
            <div id="brand" className="brand">
                <header className="brand_title" style={style}>{intl.get('brandResources')}</header>
                <div className="brand_line">
                    <img src="https://oss.guangmangapp.com/3169ec1d-96da-4fb1-8cac-ecafd2c1717c.png" alt=""/>
                </div>

                <section className="brand_designer">
                    <header className="brand_designer_title" style={style}>{intl.get('desginer')}</header>

                    <div className="brand_desginer_items_small">
                        <figure className="designer_item">
                            <img src="http://oss.cogo.club/1bc3ec70-2e9c-4843-a116-493f68e9df53.png" />
                            <p style={style3}>Stephane Rolland</p>
                        </figure>

                        <figure className="designer_item">
                            <img src="http://oss.cogo.club/a590ed4b-5faa-44ed-9072-07a5eb8d1299.png" />
                            <p style={style3}>Pascal Millet</p>
                        </figure>
                    </div>

                    <div className="brand_desginer_items_small">
                        <figure className="designer_item">
                            <img src="http://oss.cogo.club/8a0e6870-2c1b-42b5-ae62-b6d729412358.png" />
                            <p style={style3}>Vivienne Tam</p>
                        </figure>

                        <figure className="designer_item">
                            <img src="http://oss.cogo.club/26bd3d47-8b55-48b1-b782-1e7f7f09a05d.png" />
                            <p style={style3}>{intl.get('chenxuzhi')}</p>
                        </figure>
                    </div>

                    <div className="brand_desginer_items_small">
                        <figure className="designer_item">
                            <img src="http://oss.cogo.club/06d5b13e-d2c4-4c3a-bf8e-25c1300d283f.png" />
                            <p style={style3}>Jean Paul Knott</p>
                        </figure>

                        <figure className="designer_item">
                            <img src="http://oss.cogo.club/8d3987be-a593-4e38-9b43-20b5edc800b8.png" />
                            <p style={style3}>Lee Seong Dong</p>
                        </figure>
                    </div>


                    <div className="brand_desginer_items">
                        <figure className="designer_item">
                            <img src="http://oss.cogo.club/1bc3ec70-2e9c-4843-a116-493f68e9df53.png" />
                            <p style={style3}>Stephane Rolland</p>
                        </figure>

                        <figure className="designer_item">
                            <img src="http://oss.cogo.club/a590ed4b-5faa-44ed-9072-07a5eb8d1299.png" />
                            <p style={style3}>Pascal Millet</p>
                        </figure>

                        <figure className="designer_item">
                            <img src="http://oss.cogo.club/8a0e6870-2c1b-42b5-ae62-b6d729412358.png" />
                            <p style={style3}>Vivienne Tam</p>
                        </figure>
                    </div>

                    <div className="brand_desginer_items">
                        <figure className="designer_item">
                            <img src="http://oss.cogo.club/26bd3d47-8b55-48b1-b782-1e7f7f09a05d.png" />
                            <p style={style3}>{intl.get('chenxuzhi')}</p>
                        </figure>

                        <figure className="designer_item">
                            <img src="http://oss.cogo.club/06d5b13e-d2c4-4c3a-bf8e-25c1300d283f.png" />
                            <p style={style3}>Jean Paul Knott</p>
                        </figure>

                        <figure className="designer_item">
                            <img src="http://oss.cogo.club/8d3987be-a593-4e38-9b43-20b5edc800b8.png" />
                            <p style={style3}>Lee Seong Dong</p>
                        </figure>
                    </div>
                </section>

                <section className="brand_kol">
                    <header className="brand_kol_title" style={style}>{intl.get('kol')}</header>

                    <div className="brand_kol_box_small">
                        <div className="brand_kol_items">
                            <figure className="kol_item">
                                <img src="http://oss.cogo.club/02292fa7-483f-42d2-928a-e64eac7a16c8.png" alt=""/>
                                <p style={style3}>gogoboi</p>
                            </figure>

                            <figure className="kol_item">
                                <img src="http://oss.cogo.club/1441ab3b-f409-4cec-aa84-e8e7a20149fa.png" alt=""/>
                                <p style={style3}>SavisLook</p>
                            </figure>
                        </div>

                        <div className="brand_kol_items">
                            <figure className="kol_item">
                                <img src="http://oss.cogo.club/a5047faf-5e8d-4379-addf-61fddc6798eb.png" alt=""/>
                                <p style={style3}>SunnieLovesFashion</p>
                            </figure>

                            <figure className="kol_item">
                                <img src="http://oss.cogo.club/6324e1ef-f7c2-439e-8754-600b3e06f8ab.png" alt=""/>
                                <p style={style3}>搞艺术一横</p>
                            </figure>
                        </div>

                        <div className="brand_kol_items">
                            <figure className="kol_item">
                                <img src="http://oss.cogo.club/f2904599-75d0-4e43-b4dd-8620985bba17.png" alt=""/>
                                <p style={style3}>迪西</p>
                            </figure>

                            <figure className="kol_item">
                                <img src="http://oss.cogo.club/dc304915-60d4-4324-b903-4f70bf12827a.png" alt=""/>
                                <p style={style3}>艾克里里</p>
                            </figure>
                        </div>
                    </div>

                    <div className="brand_kol_box">
                        <div className="brand_kol_items">
                            <figure className="kol_item">
                                <img src="http://oss.cogo.club/02292fa7-483f-42d2-928a-e64eac7a16c8.png" alt=""/>
                                <p style={style3}>gogoboi</p>
                            </figure>

                            <figure className="kol_item">
                                <img src="http://oss.cogo.club/1441ab3b-f409-4cec-aa84-e8e7a20149fa.png" alt=""/>
                                <p style={style3}>SavisLook</p>
                            </figure>

                            <figure className="kol_item">
                                <img src="http://oss.cogo.club/a5047faf-5e8d-4379-addf-61fddc6798eb.png" alt=""/>
                                <p style={style3}>SunnieLovesFashion</p>
                            </figure>
                        </div>

                        <div className="brand_kol_items">
                            <figure className="kol_item">
                                <img src="http://oss.cogo.club/6324e1ef-f7c2-439e-8754-600b3e06f8ab.png" alt=""/>
                                <p style={style3}>搞艺术一横</p>
                            </figure>

                            <figure className="kol_item">
                                <img src="http://oss.cogo.club/f2904599-75d0-4e43-b4dd-8620985bba17.png" alt=""/>
                                <p style={style3}>迪西</p>
                            </figure>

                            <figure className="kol_item">
                                <img src="http://oss.cogo.club/dc304915-60d4-4324-b903-4f70bf12827a.png" alt=""/>
                                <p style={style3}>艾克里里</p>
                            </figure>
                        </div>
                    </div>
                </section>

                <section className="brand_newmedia">
                    <header className="brand_newmedia_title" style={style}>{intl.get('channel')}</header>
                    <div className="brand_newmedia_items" style={style2}>
                        <figure className="newmedia_item">
                            <img src="http://oss.cogo.club/684c096b-3bb9-4b7b-a29a-6288fce06b2e.png" alt=""/>
                            <p>{intl.get('media_1')}</p>
                        </figure>

                        <figure className="newmedia_item">
                            <img src="http://oss.cogo.club/48ea0e0f-f5f7-4720-a7c8-5e8002db01b1.png" alt=""/>
                            <p>{intl.get('media_2')}</p>
                        </figure>

                        <figure className="newmedia_item">
                            <img src="http://oss.cogo.club/6ff324d7-e916-4054-a36e-b3f7c1889aaf.png" alt=""/>
                            <p>{intl.get('media_3')}</p>
                        </figure>

                        <figure className="newmedia_item">
                            <img src="http://oss.cogo.club/d1de1a3a-5682-4411-bb66-8887192e8972.png" alt=""/>
                            <p>{intl.get('media_4')}</p>
                        </figure>

                        <figure className="newmedia_item">
                            <img src="http://oss.cogo.club/ed403265-8b19-44a2-b47f-47d795609b28.png" alt=""/>
                            <p>{intl.get('media_5')}</p>
                        </figure>
                    </div>
                </section>

            </div>
            <Medium />
        </div>
    )
}

export default brand;
