import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">market</div>
        <div className="footer-links">
          <div>
            <h4>CONTACT US</h4>
            <p>San Luis Potosi, Centro Historico, 78000 San Luis Potosi SLP, Mexico</p>
            <p>(404)413-215</p>
            <p>Marketing@marketTech.com</p>
          </div>
          <div>
            <h4>OUR SHOPS</h4>
            <p>Product Support</p>
            <p>PC Setup</p>
            <p>Services</p>
            <p>Conditions</p>
            <p>Privacy Policy</p>
          </div>
          <div>
            <h4>INFORMATION</h4>
            <p>Layout</p>
            <p>Features</p>
            <p>Daily Deals</p>
            <p>Blog</p>
            <p>Return Exchange</p>
          </div>
          <div>
            <h4>ALL CATEGORIES</h4>
            <p>Accessories</p>
            <p>Bags</p>
            <p>Computer</p>
            <p>Fashion</p>
            <p>Smartphone</p>
          </div>
        </div>
        <div>
          <h4>INSTAGRAM GALLERY</h4>
          <div className="footer-gallery">
            {/* Add Instagram images here */}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div>
          <span>Signup For Newsletter</span>
          <input type="email" placeholder="Enter your email address" />
          <button>SUBSCRIBE</button>
        </div>
        <div className="footer-payments">
          <img src="/images/download (7).jpg" alt="PayPal" />
          <img src="/images/download (16).jpg" alt="Visa" />
        </div>
      </div>
      <div className="footer-copyright">
        © 2018 SB eMarket. Powered by BigCommerce. Designed by FreshThemes.com
      </div>
    </footer>
  );
}

export default Footer;
