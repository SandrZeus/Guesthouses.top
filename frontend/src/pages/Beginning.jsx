import React from 'react';
import Carousel from "../components/Carousel";
import "../style/Beginning.css";
import { useTranslation } from 'react-i18next';
import renderWithLineBreaks from "../components/LineBreak";

import imageNadja from "../assets/nadja1.png";
import niekDoup from "../assets/niek-doup.jpg";
import kellySikkema from "../assets/kelly-sikkema.jpg";

const Beginning = () => {

    const {t} = useTranslation();

    return (
        <div>
            <Carousel />
            <div className='page-text'>
                <br/>
                <br/>
                <br/>
                <img src={niekDoup} className='image-decor' />
                <p className='photographer'> {t("Photograph")} Niek Doup </p>
                <div className='header-text'> {t("header1Beginning")} </div>
                <h1 className='orange-text'> {t("BeginningOrange")} </h1>
                <p className='text'> {t("text1Beginning")} </p>
                <h2 className='h2-text'> {t("header2Beginning")} </h2>
                <p className='text'> {t("text2Beginning")} </p>
                <h2 className='h2-text'> {t("header1Beginning")} </h2>
                <p className='text'> {t("text3Beginning")} </p>
                <a href='/contact' id='buttonBeginning'>
                    <button type="button" className='button-contact'> {t("ContactOrange")} </button>
                </a>
                <img className='image-pfp' src={imageNadja}/>
                <p className='photographer'> {t("Photograph")} Murat Tueremis </p>
                <h2 className='h2-text'> {t("text4Beginning")} </h2>
                <p className='text'>{renderWithLineBreaks(t("text5Beginning"))}</p>
                <br/>
                <img src={kellySikkema} className='image-decor' />
                <p className='photographer'> {t("Photograph")} Kelly Sikkema </p>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    );
};

export default Beginning;