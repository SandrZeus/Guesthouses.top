import React from 'react';
import { useTranslation } from 'react-i18next';

// Example flags, you can use your own flag icons or images
import enFlag from '../assets/en-flag.png';
import deFlag from '../assets/de-flag.png';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  
  // Track the current language
  const currentLanguage = i18n.language;

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="language-switcher">
      {/* Display the current language flag */}
      <div
        className="language-option"
        onClick={() => handleLanguageChange(currentLanguage === 'en' ? 'de' : 'en')}
        title={currentLanguage === 'en' ? 'Switch to German' : 'Switch to English'}
      >
        <img 
          src={currentLanguage === 'en' ? enFlag : deFlag} 
          alt={currentLanguage === 'en' ? 'English' : 'German'} 
        />
      </div>
    </div>
  );
};

export default LanguageSwitcher;
