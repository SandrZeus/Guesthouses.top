import React, { useState } from "react";
import "../style/Footer2.css";
import CookieConsent from "./CookieConsent";
import { useTranslation } from 'react-i18next';

function Footer2() {

    const {t} = useTranslation();

    const [showCookieModal, setShowCookieModal] = useState(false);

    const reopenModal = () => {
        setShowCookieModal(true);
    };

    return (
        <div>
            <footer className="footer2">
                <p>
                    <a href="/imprint" rel="noopener noreferrer">{t("Imprint")}</a> |
                    <a href="/data_protection" rel="noopener noreferrer">{t("DataProtection")}</a> |
                    {/*<a className="cookie-policy-link" href="#" onClick={(e) => { e.preventDefault(); reopenModal(); }}>{t("CookiePolicy")}</a> | */}
                    <a href="/login" rel="noopener noreferrer">Login</a>
                </p>
            </footer>
            {showCookieModal && <CookieConsent reopenModal={reopenModal} />}
        </div>
    );
}

export default Footer2;
