import React from 'react';
import './Header.css';
import slogo from './search.png'
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" 
          alt="YouTube Logo" 
          className="header__logo"
        />
      </div>
      <div className="header__center">
        <input 
          type="text" 
          placeholder="Search" 
          className="header__searchInput"
        />
        <button className="header__searchButton">
          <img 
            src={slogo} 
            alt="Search Icon" 
            className="header__searchIcon"
          />
        </button>
      </div>
      <div className="header__right">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" 
          alt="User Icon" 
          className="header__userIcon"
        />
      </div>
    </div>
  );
}

export default Header;
