import React from 'react';
import Carousel from "../components/Carousel";
import "../style/index.css";
import { useTranslation } from 'react-i18next';
import renderWithLineBreaks from "../components/LineBreak";

import findQ from "../assets/findq-logo.png";
import norgeBerlin from "../assets/norgeBerlin.jpg";
import imageNadja3 from "../assets/nadja3.png";
import Padurariu from "../assets/alex-padurariu.jpg";
import mica from "../assets/mica.png";
import Spratt from "../assets/annie-spratt.jpg";
import lidia from "../assets/lidia.jpg";
import lidiaTirris from "../assets/lidia-tirris.jpg";

const About = () => {

    const {t} = useTranslation();

    return (
        <div>
            <Carousel />
            <div className='page-text'>
                <h1 className='orange-text'> {t("AboutOrange")} </h1>
                <a href='https://findq.de/socialresponsibility/' target="_blank" style={{display: 'flex',justifyContent: 'center'}}>
                    <img src={findQ} />
                </a>
                <br/>
                <a href='https://norgeberlin.de/aktuelles/' target="_blank" style={{display: 'flex',justifyContent: 'center'}}>
                    <img src={norgeBerlin} />
                </a>
                <img className='image-pfp' src={imageNadja3}/>
                <p className='photographer'> <b>Nadja Raabe</b> <br/> {t("Photograph")} Luke Betts </p>
                <br/>
                <br/>
                <h2 className='h2-text'>{t("header1About")}</h2>
                <p className='text'>{t("text1About")}</p>
                <br/>
                <br/>
                <p className='text'>{renderWithLineBreaks(t("text2About"))}</p>
                <br/>
                <img className='image-decor' src={Padurariu}/>
                <p className='photographer'> {t("Photograph")} Alex Padurariu </p>
                <hr/>
                <img className='image-pfp' src={mica}/>
                <p className='photographer'> <b>Mica Endemann</b> <br/> MICA.SA Berlin <br/> Coach für Beziehungsräume <br/> Gründerin </p>
                <br/>
                <br/>
                <p className='text'>{t("text3About")}</p>
                <br/>
                <img className='image-decor' src={Spratt}/>
                <p className='photographer'> {t("Photograph")} Annie Spratt </p>
                <hr/>
                <img className='image-pfp' src={lidia}/>
                <p className='photographer'> <b>Lidia Tirri</b> </p>
                <br/>
                <p className='text'>{t("text4About")}</p>
                <br/>
                <p className='text'>{t("text5About")}</p>
                <br/>
                <img className='image-decor' src={lidiaTirris}/>
                <p className='photographer'> {t("Photograph")} Lidia Tirri </p>
            </div>
            <br/>
            <br/>
            <br/>
        </div>
    );
};

export default About;