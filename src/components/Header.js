import React from 'react';
import './Header.css';
import { FaSearch, FaUser, FaShoppingCart, FaChevronDown } from 'react-icons/fa';

function Header() {
  return (
    <header className="header">
      {/* Top Promo Bar */}
      <div className="top-bar">
        <span>
          Popular! This marketing banner to advertise a special promotion such as:
          <strong> Save 20% this weekend!</strong>
        </span>
      </div>

      {/* Main Header */}
      <div className="main-header">
        <div className="logo">
          <span className="logo-icon">e</span>
          <span className="logo-text">market</span>
        </div>

        <div className="search-container">
          <input type="text" placeholder="Search the store" className="search-bar" />
          <button className="search-btn"><FaSearch /></button>
        </div>

        <div className="header-actions">
          <span>Gift Certificates</span>
          <span><FaUser /> My Account</span>
          <span><FaShoppingCart /> My Cart: $0.00</span>
        </div>
      </div>

      {/* Nav Bar */}
      <nav className="nav-bar">
        <ul>
          <li className="all-categories">
            All Categories <FaChevronDown className="down-icon" />
          </li>
          <li>Home</li>
          <li>Layout</li>
          <li>Features</li>
          <li>Daily Deals</li>
          <li>Pages</li>
          <li>Blog</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
