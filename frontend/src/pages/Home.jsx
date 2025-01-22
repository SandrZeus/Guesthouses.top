import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import Carousel from "../components/Carousel";
import PDF from "../components/Pdf";
import "../style/index.css";
import image from "../assets/gutenmorgenberlin.jpg";

const Home = () => {
    const { i18n } = useTranslation();
    const [pdfs, setPdfs] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0); // Track the currently displayed PDF index

    useEffect(() => {
        const fetchPdfs = async () => {
            try {
                const language = i18n.language === 'de' ? 'de' : 'en';
                const response = await fetch(`https://api.guesthouses.top/api/pdfs/${language}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (response.ok) {
                    const data = await response.json();
                    const sortedPdfs = data.sort((a, b) => b.id - a.id); // Sort by id (newest first)
                    setPdfs(sortedPdfs);
                } else {
                    console.error('Failed to fetch PDFs');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchPdfs();
    }, [i18n.language]);

    const goToPrevious = () => {
        if (currentIndex < pdfs.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const goToNext = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div>
            <Carousel />
            <br />
            <img src={image} className="page-text" id="home-image" alt="Guten Morgen Berlin" />
            <br />
            <div>
            {pdfs.length > 0 ? (
                <>
                    {/* Display the current PDF */}
                    <PDF key={pdfs[currentIndex].id} pdf={pdfs[currentIndex]} />
                    <div className="pdf-navigation">
                        {/* Navigation Buttons */}
                        <button 
                            onClick={goToNext}
                            className="pdf-nav-button"
                            disabled={currentIndex <= 0}
                        >
                            {currentIndex > 0 ? `Go to "${pdfs[currentIndex - 1].title}"` : "No More Newsletters"}
                        </button>
                        <button 
                            onClick={goToPrevious}
                            className="pdf-nav-button"
                            disabled={currentIndex >= pdfs.length - 1}
                        >
                            {currentIndex < pdfs.length - 1 ? `Go to "${pdfs[currentIndex + 1].title}"` : "No More Newsletters"}
                        </button>
                    </div>
                </>
            ) : (
                <p>Loading PDFs...</p>
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
