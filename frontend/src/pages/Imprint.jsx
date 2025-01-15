import React from 'react';
import Carousel from "../components/Carousel"
import { useTranslation } from 'react-i18next';

const Imprint = () => {

    const {t} = useTranslation();

    return (
        <div>
            <Carousel />
            <div className='page-text'>
                <br/>
                <br/>
                <br/>
                <h1>{t("imprintHeader1")}</h1>
                <br/>
                <br/>
                <br/>
                <p className='text'><b>{t("imprintText1")}</b></p>
                <br/>
                <p className='text'>
                    Top Guesthouses, findQ, findQuick sind Marken der Namola UG (haftungsbeschränkt)<br/>
                    <b>Namola UG (haftungsbeschränkt)</b><br/>
                    Straße zum Löwen 25<br/>
                    14109 Berlin
                </p>
                <br/>
                <br/>
                <p className='text'>
                    {t("imprintText2")}: Nadja Raabe<br/>
                    HRB 256621 B, Amtsgericht Charlottenburg<br/>
                    Finanzamt für Körperschaften III<br/>
                    USt.ID DE365218994
                </p>
                <br/>
                <br/>
                <p className='text'>
                    Telephone: +49 (0) 30 - 52 65 56 03<br/>
                    Mobile: +49 (0) 177 - 600 41 88<br/>
                    E-Mail: info@guesthouses.top<br/>
                    E-Mail Managing Director: mail@namola.de<br/>
                    www.findQuick.de<br/>
                    www.guesthouses.top
                </p>
                <br/>
                <br/>
                <br/>
                <h1>{t("imprintHeader2")}</h1>
                <br/>
                <br/>
                <br/>
                <h2>{t("imprintText3")}</h2>
                <br/>
                <p className='text'>{t("imprintText4")}</p>
                <br/>
                <p className='text'>{t("imprintText5")}</p>
                <br/>
                <h2>{t("imprintText6")}</h2>
                <br/>
                <p className='text'>{t("imprintText7")}</p>
                <br/>
                <p className='text'>{t("imprintText8")}</p>
                <br/>
                <h2>{t("imprintText9")}</h2>
                <br/>
                <p className='text'>{t("imprintText10")}</p>
                <br/>
                <p className='text'>{t("imprintText11")}</p>
                <br/>
                <h2>{t("imprintText12")}</h2>
                <br/>
                <p className='text'>{t("imprintText13")}</p>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    );
};

export default Imprint;