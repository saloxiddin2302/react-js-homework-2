import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import "./Navbar.scss";
import logo from "../../assets/images/logo.svg";
import Certificate from './../certificate/Certificate';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isShrunk, setShrunk] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!isDarkMode);
    document.body.classList.toggle("dark");
  };

  useEffect(() => {
    const handleScroll = () => {
      const shouldShrink = window.scrollY > 0;
      setShrunk(shouldShrink);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav
        className={`navbar ${isMenuOpen ? "open" : ""} ${
          isShrunk ? "shrink" : ""
        }`}
      >
        <div className="navbar-container">
          <img src={logo} alt="logo" />
          <div className="menu-icon" onClick={handleMenuClick}>
            <div className="menu-icon-bar" />
            <div className="menu-icon-bar" />
            <div className="menu-icon-bar" />
          </div>
          <div className="menu-items">
            <a href="#ss">Продукция</a>
            <div className="dropdown">
              <a href="#">Сертификаты 🔽</a>
              <div className="dropdown-content">
                <a href="#">Certificate</a>
                <a href="#">Certificate</a>
                <a href="#">Certificate</a>
              </div>
            </div>
            <a href="#ss">Наша команда</a>
            <a href="#ss">О нас</a>
            <a href="#ss">Новости</a>
            <a href="#ss">Вакансии</a>
            <a href="#ss">Контакты</a>
          </div>
          <button onClick={toggleMode} className="dark-mode-button">
            <FontAwesomeIcon
              icon={isDarkMode ? faSun : faMoon}
              className={`icon ${isDarkMode ? "sun" : "moon"}`}
            />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
