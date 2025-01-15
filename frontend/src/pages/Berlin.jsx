import React from 'react';
import Carousel from "../components/Carousel";
import "../style/Berlin.css";
import "../style/index.css";
import CarouselMini from "../components/CarouselMini";
import { useTranslation } from 'react-i18next';

import fleming1En from "../assets/Expose Flemingstr.9 EN 1.jpg";
import fleming2En from "../assets/Expose Flemingstr.9 EN 2.jpg";
import fleming3En from "../assets/Expose Flemingstr.9 EN 3.jpg";
import fleming4En from "../assets/Expose Flemingstr.9 EN 4.jpg";
import fleming5En from "../assets/Expose Flemingstr.9 EN 5.jpg";
import fleming6En from "../assets/Expose Flemingstr.9 EN 6.jpg";
import fleming7En from "../assets/Expose Flemingstr.9 EN 7.jpg";
import fleming8En from "../assets/Expose Flemingstr.9 EN 8.jpg";

import fleming1De from "../assets/Expose Flemingstrasse 1.jpg";
import fleming2De from "../assets/Expose Flemingstrasse 2.jpg";
import fleming3De from "../assets/Expose Flemingstrasse 3.jpg";
import fleming4De from "../assets/Expose Flemingstrasse 4.jpg";
import fleming5De from "../assets/Expose Flemingstrasse 5.jpg";
import fleming6De from "../assets/Expose Flemingstrasse 6.jpg";
import fleming7De from "../assets/Expose Flemingstrasse 7.jpg";

import flemingDecor from "../assets/XL-241202_Flemingstr_095.jpg";

// Images for both languages
const imagesEn = [
    fleming1En,
    fleming2En,
    fleming3En,
    fleming4En,
    fleming5En,
    fleming6En,
    fleming7En,
    fleming8En,
];

const imagesDe = [
    fleming1De,
    fleming2De,
    fleming3De,
    fleming4De,
    fleming5De,
    fleming6De,
    fleming7En,
    fleming7De,
];

const Berlin = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const { t } = useTranslation();

  // Conditionally render images based on the language
  const carouselImages = currentLanguage === 'en' ? imagesEn : imagesDe;

  return (
    <div>
      <Carousel />
      <div className="page-text">
        <h1 className='orange-text'> Berlin Walk </h1>
        <br />
        <ol className='ordered-list-berlin'>
          <li className='h2-text'>{t("header1Fleming")}</li>
          <br />
          <p className='text'>{t("text1Fleming")}</p>
          <br />
          <p className='text'>{t("text2Fleming")}</p>
          <br />
          <li className='h2-text'>{t("header3Fleming")}
            <ul className='nested-list'>
              <li className='list-item'><b>Haus der Kulturen der Welt: </b>{t("text3Fleming")}</li>
              <li className='list-item'><b> {t("extraFleming")} </b>{t("text5Fleming")}</li>
            </ul>
          </li>
          <li className='h2-text'>{t("header4Fleming")}
            <ul className='nested-list'>
              <li className='list-item'><b>Restaurant Paris-Moskau: </b>{t("text6Fleming")}</li>
              <li className='list-item'><b>Carl & Sophie Restaurant: </b>{t("text7Fleming")}</li>
              <li className='list-item'><b>Hamburger Bahnhof Restaurant (Sarah Wiener): </b>{t("text8Fleming")}</li>
              <li className='list-item'><b>PATIO – The Floating Experience: </b>{t("text9Fleming")}</li>
              <li className='list-item'><b>Amano’s Rooftop Bar: </b>{t("text10Fleming")}</li>
            </ul>
          </li>
        </ol>
        <br />
        <h2>Flemingstraße 9</h2>
        <br />
        <CarouselMini images={carouselImages} />
        <br />
        <br />
        <h2 className='h2-text'>{t("header5Fleming")}</h2>
        <p className='text'>{t("text12Fleming")}</p>
        <br />
        <img src={flemingDecor} className='image-decor' />
        <p className='photographer'> {t("Photograph")} Lidia Tirri </p>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Berlin;
