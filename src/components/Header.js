import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="top-bar">
        <span>Popular! This marketing banner to advertise a special promotion such as: Save 20% this weekend!</span>
      </div>
      <div className="main-header">
        <div className="logo">market</div>
        <input type="text" placeholder="Search the store" className="search-bar" />
        <div className="header-actions">
          <span>Gift Certificates</span>
          <span>My Account</span>
          <span>My Cart: $0.00</span>
        </div>
      </div>
      <nav className="nav-bar">
        <ul>
          <li>All Categories</li>
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