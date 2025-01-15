import React from 'react';
import Carousel from "../components/Carousel"
import { useTranslation } from 'react-i18next';

const DataProtection = () => {

    const {t} = useTranslation();

    return (
        <div>
            <Carousel />
            <div className='page-text'>
                <br/>
                <br/>
                <br/>
                <h1>{t("privacyHeader1")}</h1>
                <br/>
                <br/>
                <br/>
                <p className='text'>{t("privacyText1")}</p>
                <br/>
                <p className='text'>{t("privacyText2")}</p>
                <br/>
                <p className='text'>{t("privacyText3")}</p>
                <br/>
                <ol className='ordered-list-berlin'>
                    <b><li className='text'>{t("privacyText4")}</li></b>
                    <br/>
                    <p className='text'>{t("privacyText5")}</p>
                    <br/>
                    <p className='text'>{t("privacyText6")}</p>
                    <br/>
                    <ul className='ordered-list-berlin'>
                        <li className='text'><b>{t("privacyText7")}</b></li>
                        <br/>
                        <p className='text'>{t("privacyText8")}</p>
                        <br/>
                        <li className='text'><b>{t("privacyText9")}</b></li>
                        <br/>
                        <p className='text'>{t("privacyText10")}</p>
                        <br/>
                        <li className='text'><b>{t("privacyText11")}</b></li>
                        <br/>
                        <p className='text'>{t("privacyText12")}</p>
                        <br/>
                        <li className='text'><b>{t("privacyText13")}</b></li>
                        <br/>
                        <p className='text'>{t("privacyText14")}</p>
                        <br/>
                        <li className='text'><b>{t("privacyText15")}</b></li>
                        <br/>
                        <p className='text'>{t("privacyText16")}</p>
                        <br/>
                        <li className='text'><b>{t("privacyText17")}</b></li>
                        <br/>
                        <p className='text'>{t("privacyText18")}</p>
                        <br/>
                        <li className='text'><b>{t("privacyText19")}</b></li>
                        <br/>
                        <p className='text'>{t("privacyText20")}</p>
                        <br/>
                        <li className='text'><b>{t("privacyText21")}</b></li>
                        <br/>
                        <p className='text'>{t("privacyText22")}</p>
                        <br/>
                        <li className='text'><b>{t("privacyText23")}</b></li>
                        <br/>
                        <p className='text'>{t("privacyText24")}</p>
                        <br/>
                        <li className='text'><b>{t("privacyText25")}</b></li>
                        <br/>
                        <p className='text'>{t("privacyText26")}</p>
                        <br/>
                        <li className='text'><b>{t("privacyText27")}</b></li>
                        <br/>
                        <p className='text'>{t("privacyText28")}</p>
                        <br/>    
                    </ul>
                    <br/>
                    <b><li className='text'>{t("privacyText29")}</li></b>
                    <br/>
                    <p className='text'>{t("privacyText30")}</p>
                    <br/>
                    <p className='text'>{t("privacyText31")}</p>
                    <p className='text'> Strasse zum Löwen 25 D-14109 Berlin <br/>
                        Tel.: +49 (0) 30 – 52 65 56 03 <br/>
                        E-Mail Geschäftsführung: mail@namola.de <br/>
                        E-Mail: info@guesthouses.top <br/>
                        Website: www.guesthouses.top
                    </p>
                    <br/>
                    <b><li className='text'>{t("privacyText32")}</li></b>
                    <br/>
                    <p className='text'>{t("privacyText33")}</p>
                    <br/>
                    <p className='text'>{t("privacyText34")}</p>
                    <br/>
                    <p className='text'>{t("privacyText35")}</p>
                    <br/>
                    <p className='text'>{t("privacyText36")}</p>
                    <br/>
                    <p className='text'>{t("privacyText37")}</p>
                    <br/>
                    <b><li className='text'>{t("privacyText38")}</li></b>
                    <br/>
                    <p className='text'>{t("privacyText39")}</p>
                    <br/>
                    <p className='text'>{t("privacyText40")}</p>
                    <br/>
                    <b><li className='text'>{t("privacyText41")}</li></b>
                    <br/>
                    <p className='text'>{t("privacyText42")}</p>
                    <br/>
                    <p className='text'>{t("privacyText43")}</p>
                    <br/>
                    <p className='text'>{t("privacyText44")}</p>
                    <br/>
                    <p className='text'>{t("privacyText45")}</p>
                    <br/>
                    <b><li className='text'>{t("privacyText46")}</li></b>
                    <br/>
                    <p className='text'>{t("privacyText47")}</p>
                    <br/>
                    <p className='text'>{t("privacyText48")}</p>
                    <br/>
                    <b><li className='text'>{t("privacyText49")}</li></b>
                    <br/>
                    <p className='text'>{t("privacyText50")}</p>
                    <br/>
                    <p className='text'>{t("privacyText51")}</p>
                    <br/>
                    <b><li className='text'>{t("privacyText52")}</li></b>
                    <br/>
                    <p className='text'>{t("privacyText53")}</p>
                    <br/>
                    <p className='text'>{t("privacyText54")}</p>

                </ol>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    );
};

export default DataProtection;