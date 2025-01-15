import React from 'react';
import Carousel from "../components/Carousel";
import "../style/index.css";
import { useTranslation } from 'react-i18next';
import renderWithLineBreaks from "../components/LineBreak";

import imageNadja2 from "../assets/nadja2.jpg";
import carlRaabe from "../assets/R1-01007-006A.jpg";
import shadows1 from "../assets/tom-barrett-hvvRg72aXCw-unsplash.jpg";
import shadows2 from "../assets/shadows2.jpg";

const UrbanLiving = () => {

    const {t} = useTranslation();

    return (
        <div>
            <Carousel />
            <div className='page-text'>
                <h1 className='orange-text'> {t("header1Urban")} </h1>
                <img className='image-pfp' src={imageNadja2}/>
                <p className='photographer'> {t("Photograph")} Murat Tueremis </p>
                <h1> {t("header2Urban")} </h1>
                <h2 className='h2-text'> {t("header3Urban")} </h2>
                <p className='text'>{renderWithLineBreaks(t("text1Urban"))}</p>
                <br/>
                <img src={shadows1} className='image-decor' />
                <p className='photographer'> {t("Photograph")} Tom Berrett </p>
                <br/>
                <h2 className='h2-text'> {t("header4Urban")} </h2>
                <p className='text'>{renderWithLineBreaks(t("text2Urban"))}</p>
                <br/>
                <img src={shadows2} className='image-decor' />
                <br/>
                <img src={carlRaabe} className='image-decor' />
                <p className='photographer'> {t("Photograph")} Carl Raabe </p>
            </div>
            <br/>
            <br/>
            <br/>
        </div>
    );
};

export default UrbanLiving;