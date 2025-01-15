import React from 'react';
import Carousel from "../components/Carousel";
import "../style/index.css";
import { useTranslation } from 'react-i18next';
import renderWithLineBreaks from "../components/LineBreak";
import imageNadja from "../assets/nadja1.png";
import findqLogo from "../assets/findq-logo.png";

import toaHeftiba from "../assets/toa-heftiba-LjZcWE6GhiA-unsplash.jpg";
import beazy from "../assets/beazy.jpg";

const Coaching = () => {
    
    const {t} = useTranslation();

    return (
        <div>
            <Carousel />
            <div className='page-text'>
                <h1 className='orange-text'> Coaching </h1>
                <pre>{renderWithLineBreaks(t("quote1Coaching"))}</pre>
                <br/>
                <p className='text'>{t("text0Coaching")}</p>
                <br/>
                <h2 className='h2-text'>{t("header1Coaching")}</h2>
                <br/>
                <p className='text'>{t("text1Coaching")}</p>
                <br/>
                <p className='text'>{t("text2Coaching")}</p>
                <br/>
                <p className='text'>{t("text3Coaching")}</p>
                <br/>
                <img src={beazy} className='image-decor' />
                <p className='photographer'> {t("Photograph")} Beazy/unsplash </p>
                <br/>
                <h2 className='h2-text'>{t("header2Coaching")}</h2>
                <p className='text'>{t("text4Coaching")}</p>
                <br/>
                <h2 className='h2-text'>{t("header3Coaching")}</h2>
                <p className='text'>{renderWithLineBreaks(t("text5Coaching"))}</p>
                <br/>
                <a href='/contact'>
                    <button type="button" className='button-contact'> {t("ContactOrange")} </button>
                </a>
                <img className='image-pfp' src={imageNadja}/>
                <p className='photographer'> {t("Photograph")} Murat Tueremis </p>
                <br/>
                <br/>
                <br/>
                <h2 className='h2-text'>{t("header4Coaching")}</h2>
                <iframe className='video' src="https://www.youtube.com/embed/BdeoH-AQPwg?si=y8SjmxBw7fZzkPNa" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <br/>
                <br/>
                <br/>
                <h2 className='h2-text'>{t("header5Coaching")}</h2>
                <iframe className='video' src="https://www.youtube.com/embed/Tg0832hgrQA?si=YespS_DNYkts_3oI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <br/>
                <br/>
                <br/>
                <a href='https://findq.de/en/findquick/#anfrage' target="_blank">
                    <img src={findqLogo} />
                </a>
                <br/>
                <br/>
                <br/>
                <h2 className='h2-text'>{t("header6Coaching")}</h2>
                <br/>
                <p className='text'>{renderWithLineBreaks(t("text6Coaching"))}</p>
                <br/>
                <br/>
                <p className='text'>{renderWithLineBreaks(t("text7Coaching"))}</p>
                <br/>
                <br/>
                <p className='text'>{renderWithLineBreaks(t("text8Coaching"))}</p>
                <br/>
                <img src={toaHeftiba} className='image-decor' />
                <p className='photographer'> {t("Photograph")} Toa Heftiba </p>
            </div>
            <br/>
            <br/>
            <br/>
        </div>
    );
};

export default Coaching;