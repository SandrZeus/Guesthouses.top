import React from "react"
import logo from '../assets/logo-black.png';
import "../style/Footer.css"

function Footer(){
    return (
        <footer className="footer">
            <ul className="ft-list1">
                <li className="boldTextFooter">Guesthouses Top</li>
                <li className="boldTextFooter">Namola UG (haftungsbeschränkt)</li>
                <li className="normTextFooter">Geschäftsführerin Nadja Raabe</li>
                <li className="normTextFooter">Straße zum Löwen 25</li>
                <li className="normTextFooter">14109 Berlin</li>
            </ul>
            <img src={logo} alt="logo" className="ft-logo" />
            <ul className="ft-list2">
                <li className="normTextFooter">Telephone: +49 (0) 30 - 52 65 56 03</li>
                <li className="normTextFooter">Mobile:     +49 (0) 177 - 600 41 88</li>
                <li className="normTextFooter">E-Mail: <a href="mailto:info@guesthouses.top">info@guesthouses.top</a></li>
                <li className="normTextFooter"><a href="https://www.findQuick.de" target="_blank" rel="noopener noreferrer">www.findQuick.de</a></li>
                <li className="normTextFooter"><a href="https://www.guesthouses.top" target="_blank" rel="noopener noreferrer">www.guesthouses.top</a></li>
            </ul>
        </footer>
    );
}

export default Footer