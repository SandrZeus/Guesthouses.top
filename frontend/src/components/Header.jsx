import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import "../style/Header.css";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {

  const {t} = useTranslation();

  const [menuActive, setMenuActive] = useState(false); // State to track if the menu is open
  const location = useLocation();

  const dropdownPaths = [
    "/home/beginning",
    "/home/urban-living",
    "/home/podcast",
    "/home/berlin",
  ];

  const isDropdownActive = dropdownPaths.includes(location.pathname);

  const toggleMenu = () => {
    setMenuActive(!menuActive); // Toggle the menu
  };

  const closeMenu = () => {
    setMenuActive(false); // Close the menu when a menu item is clicked
  };

  return (
    <header className="header">
      <div className="logo-container">
        <NavLink to="/" end>
          <img src={logo} alt="logo" className="nav-logo" />
        </NavLink>
      </div>

      {/* Hamburger Menu for small screens */}
      <button
        className={`menu-toggle ${menuActive ? "active" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`nav-container ${menuActive ? "active" : ""}`}>
        <ul className={`nav-list ${menuActive ? "active" : ""}`}>
          <li className="nav-item">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive || isDropdownActive ? "active-link" : ""
              }
              onClick={closeMenu} // Close menu when clicked
            >
              HOME
            </NavLink>
            <ul className="nav-dropdown">
              <li className="nav-dropdown-item">
                <NavLink
                  to="/home/beginning"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                  onClick={closeMenu} // Close menu when clicked
                >
                  {t("Beginning")}
                </NavLink>
              </li>
              <li className="nav-dropdown-item">
                <NavLink
                  to="/home/urban-living"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                  onClick={closeMenu} // Close menu when clicked
                >
                  URBAN LIVING
                </NavLink>
              </li>
              <li className="nav-dropdown-item">
                <NavLink
                  to="/home/podcast"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                  onClick={closeMenu} // Close menu when clicked
                >
                  PODCAST
                </NavLink>
              </li>
              <li className="nav-dropdown-item">
                <NavLink
                  to="/home/berlin"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                  onClick={closeMenu} // Close menu when clicked
                >
                  BERLIN
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active-link" : "")}
              onClick={closeMenu} // Close menu when clicked
            >
              {t("About")}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/coaching"
              className={({ isActive }) => (isActive ? "active-link" : "")}
              onClick={closeMenu} // Close menu when clicked
            >
              COACHING
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active-link" : "")}
              onClick={closeMenu} // Close menu when clicked
            >
              {t("Contact")}
            </NavLink>
            
          </li>
        </ul>
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Header;
