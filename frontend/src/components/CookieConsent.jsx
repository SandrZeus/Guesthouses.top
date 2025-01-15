import React, { useState, useEffect } from "react";

const CookieConsent = ({ reopenModal }) => {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem("cookiesAccepted");
    if (hasAcceptedCookies) {
      setShowModal(false); // Don't show modal if cookies are accepted
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setShowModal(false); // Close modal after acceptance
  };

  const handleDecline = () => {
    localStorage.setItem("cookiesAccepted", "false");
    setShowModal(false); // Close modal after decline
  };

  return (
    showModal && (
      <div className="cookie-modal">
        <div className="cookie-modal-content">
          <h2>We use cookies</h2>
          <p>
            We use cookies to ensure you get the best experience on our website.{" "}
            <a href="#" onClick={(e) => { e.preventDefault(); reopenModal(); }}>Cookie Policy</a>
          </p>
          <div className="cookie-buttons">
            <button onClick={handleAccept}>Accept</button>
            <button onClick={handleDecline}>Decline</button>
          </div>
        </div>
      </div>
    )
  );
};

export default CookieConsent;
