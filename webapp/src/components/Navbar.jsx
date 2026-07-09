import React from 'react';
import './Navbar.css';
import { translations } from '../translations';

const Navbar = ({ lang, toggleLang }) => {
  const t = translations[lang].navbar;

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">ISSHALIV</a>
      </div>

      <div className="navbar-action">
        <button className="lang-toggle-btn" onClick={toggleLang}>
          {t.langToggle}
        </button>
        <button className="btn-primary">{t.whereToBuy}</button>
      </div>
    </nav>
  );
};

export default Navbar;
