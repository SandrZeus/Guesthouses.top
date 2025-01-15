import React from 'react';
import Carousel from "../components/Carousel";
import "../style/index.css";
import { useTranslation } from 'react-i18next';
import renderWithLineBreaks from "../components/LineBreak";

import imageHisu from "../assets/HisuLee.jpg";
import imagePodcast from "../assets/podcast.jpg";
import imagePodcast1 from "../assets/podcast1.jpg";
import imagePodcast2 from "../assets/podcast2.jpg";
import imagePodcast3 from "../assets/podcast3.jpg";
import jaclynMoy from "../assets/jaclyn-moy.jpg";

const Podcast = () => {

    const {t} = useTranslation();

    return (
        <div>
            <Carousel />
            <div className='page-text'>
                <h1 className='orange-text'> Guten Morgen Berlin </h1>
                <img className='image-pfp' src={imageHisu}/>
                <p className='photographer'> Foto: Hisu Lee/ Unsplash </p>
                <p className='text'>{t("text1Podcast")}</p>
                <br/>
                <pre>{renderWithLineBreaks(t("text2Podcast"))}</pre>
                <br/>
                <p className='text'>{t("text3Podcast")}</p>
                <br/>
                <p className='text'>{t("text4Podcast")}</p>
                <br/>
                <p className='text'>{t("text5Podcast")}</p>
                <br/>
                <img src={jaclynMoy} className='image-decor' />
                <p className='photographer'> {t("Photograph")} Jaclyn Moy </p>
                <br/>
                <h1 className='orange-text'> PODCAST </h1>
                <h3> {t("header1Podcast")} </h3>
                <br/>
                <h2 className='h2-text'>{t("header2Podcast")}</h2>
                <p className='text'>{t("text6Podcast")}</p>
                <br/>
                <br/>
                <br/>
                <br/>
                <a href='https://open.spotify.com/episode/6TFQZyQByLDAcE38RskGQ8?si=d0DnIyMHSHik6wqQllVV1A&nd=1' target="_blank" title="Spotify">
                    <img className='image-pfp' src={imagePodcast} />
                </a>
                <br/>
                <h2 className='h2-text'>{t("header3Podcast")}</h2>
                <p className='text'>
                    <b>Lilli Höch Corona</b>{t("text7Podcast")}<br/>
                    <b>Anastasia Barner</b>{t("text8Podcast")}
                </p>
                <br/>
                <img className='image-pfp' src={imagePodcast1}/>
                <img className='image-pfp' src={imagePodcast2}/>
                <img className='image-pfp' src={imagePodcast3}/>
                <p className='photographer'> {t("Photograph")} Paul Winkler  </p>
            </div>
            <br/>
            <br/>
            <br/>{/* add new podcast link here*/}
            <br/>
            <br/>
        </div>
    );
};

export default Podcast;