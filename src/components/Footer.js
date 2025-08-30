import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      {/* Top Orange Bar */}
      <div className="footer-topbar">
        <div className="footer-logo">market</div>
        <div className="footer-nav">
          <a href="#">Product Support</a>
          <a href="#">PCs Setup</a>
          <a href="#">Services</a>
          <a href="#">Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
        <div className="footer-socials">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-youtube"></i>
        </div>
      </div>

      {/* White Section */}
      <div className="footer-main">
        <div className="footer-column">
          <h4>CONTACT US</h4>
          <p>San Luis Potosí, Centro Histórico,<br />78000 San Luis Potosí, SLP, México</p>
          <p>+542 321 319 219</p>
          <p>market@support.com</p>
          <p>Open Time: 8:00AM - 6:00PM</p>
        </div>

        <div className="footer-column">
          <h4>OUR SHOPS</h4>
          <p>Product Support</p>
          <p>PC Setup</p>
          <p>Services</p>
          <p>Conditions</p>
          <p>Privacy Policy</p>
          <p>Return Exchange</p>
        </div>

        <div className="footer-column">
          <h4>INFORMATION</h4>
          <p>Layout</p>
          <p>Features</p>
          <p>Daily Deals</p>
          <p>Pages</p>
          <p>Blog</p>
        </div>

        <div className="footer-column">
          <h4>ALL CATEGORIES</h4>
          <p>Accessories</p>
          <p>Bags</p>
          <p>Computer</p>
          <p>Fashion</p>
          <p>Jewelry</p>
          <p>View All</p>
        </div>

        <div className="footer-column">
          <h4>INSTAGRAM GALLERY</h4>
          <div className="footer-gallery">
            <img src="/images/download (2).jpg" alt="gallery1" />
            <img src="/images/download (5).jpg" alt="gallery2" />
            <img src="/images/download (16).jpg" alt="gallery3" />
            <img src="/images/download (7).jpg" alt="gallery4" />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        © 2018 SB eMarket. Powered by BigCommerce. Designed by FreshThemes.com
      </div>
    </footer>
  );
}

export default Footer;
