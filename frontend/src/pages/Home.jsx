import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next"; // Import the translation hook
import Carousel from "../components/Carousel";
import PDF from "../components/Pdf";
import "../style/index.css";
import image from "../assets/gutenmorgenberlin.jpg";

const Home = () => {
    const { i18n } = useTranslation(); // Access the i18n instance
    const [pdfs, setPdfs] = useState([]);

    useEffect(() => {
        const fetchPdfs = async () => {
            try {
                // Use the current language set in i18n
                const language = i18n.language === 'de' ? 'de' : 'en'; // Default to 'en' if not German
                const response = await fetch(`https://api.guesthouses.top/api/pdfs/${language}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (response.ok) {
                    const data = await response.json();
                    // Sort PDFs by id in descending order (newest first)
                    const sortedPdfs = data.sort((a, b) => b.id - a.id);
                    setPdfs(sortedPdfs);
                } else {
                    console.error('Failed to fetch PDFs');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchPdfs();
    }, [i18n.language]); // Refetch PDFs when the language changes

    return (
        <div>
            <Carousel />
            <br />
            <img src={image} className="page-text" id="home-image" alt="Guten Morgen Berlin" />
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
