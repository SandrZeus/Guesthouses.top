import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next"; // Import the translation hook
import Carousel from "../components/Carousel";
import PDF from "../components/Pdf";
import "../style/index.css";
import image from "../assets/gutenmorgenberlin.jpg";
import pdfEnglish from '../assets/en_pdf.pdf'; // Local PDF for English
import pdfGerman from '../assets/de_pdf.pdf'; // Local PDF for German

const Home = () => {
    const { i18n } = useTranslation(); // Access the translation instance
    const [pdfs, setPdfs] = useState([]);

    useEffect(() => {
        const language = i18n.language === 'en' ? 'en' : 'de';
        const localPdfs = language === 'en' ? [{ id: 1, language: 'en', url: pdfEnglish }] : [{ id: 1, language: 'de', url: pdfGerman }];
        
        // Set the PDFs state
        setPdfs(localPdfs);
    }, [i18n.language]); // Refetch PDFs when language changes

    return (
        <div>
            <Carousel />
            <br />
            <img src={image} className="page-text" id="home-image" />
            <br />
            <div>
                {pdfs.length > 0 ? (
                    pdfs.map((pdf) => (
                        <PDF key={pdf.id} pdf={pdf} />
                    ))
                ) : (
                    <p>Loading PDFs...</p> // Display a loading message while fetching PDFs
                )}
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    );
};

export default Home;
