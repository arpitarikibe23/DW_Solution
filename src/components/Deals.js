import React from 'react';
import './Deals.css';

const deals = {
  name: 'Donec Et Libero Nunc Quis Facilisis Odio',
  price: '$550.00',
  oldPrice: '$650.00',
  img: '/images/images (8).jpg',
  badge: 'Free Shipping',
  discount: '-19%',
  numbers: [146, 4, 34, 57],
};

const sports = [
  { name: 'Alternative Two-Tone', price: '$300.00', oldPrice: '$320.00', img: '/images/download (4).jpg', discount: '-13%' },
  { name: 'Bohemian Printed Dress', price: '$420.00', oldPrice: '$480.00', img: '/images/images (9).jpg', discount: '-21%' },
  { name: 'congue nihil imperdiet', price: '$75.00 - $85.00', oldPrice: '', img: '/images/download (8).jpg', discount: '-20%' },
  { name: 'EcoSmart Fleece Hoodie', price: '$350.00', oldPrice: '', img: '/images/download (9).jpg', discount: '' },
  { name: 'Big Fat Flap Wallet', price: '$140.00', oldPrice: '', img: '/images/download (5).jpg', discount: '-36%' },
  { name: 'Cillum Ham Hock', price: '$360.00', oldPrice: '', img: '/images/images (1).jpg', discount: '' },
  { name: 'Crochet Lace Dress', price: '$360.00', oldPrice: '', img: '/images/download (6).jpg', discount: '-17%' },
  { name: 'EcoSmart Fleece Hoodie', price: '$135.00', oldPrice: '', img: '/images/images.jpg', discount: '-30%' },
];

const extraImages = [
  { img: '/images/images (10).jpg', title: 'SALE 50% OFF' },
  { img: '/images/images (11).jpg', title: 'Tropical Punch' },
  { img: '/images/download (10).jpg', title: 'SALE 50% OFF' },
];

function Deals() {
  return (
    <section className="deals">
      <h3 className="deals-title">DAILY DEALS & SPORTS</h3>
      <div className="deals-sports-wrapper">
        <div className="deal-item">
          <div className="deal-img-wrap">
            <img src={deals.img} alt={deals.name} className="deal-img" />
            <span className="deal-badge">{deals.badge}</span>
            <span className="deal-discount">{deals.discount}</span>
          </div>
          <div className="deal-info">
            <h4 className="deal-name">{deals.name}</h4>
            <div className="deal-prices">
              <span className="deal-price">{deals.price}</span>
              <span className="deal-old-price">{deals.oldPrice}</span>
            </div>
            <div className="deal-numbers">
              {deals.numbers.map((num, idx) => (
                <span key={idx} className="deal-number-circle">{num}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="sports-list">
          {sports.map((item, idx) => (
            <div key={idx} className="sports-item">
              <div className="sports-img-wrap">
                <img src={item.img} alt={item.name} className="sports-img" />
                {item.discount && <span className="sports-discount">{item.discount}</span>}
                {item.timer && <span className="sports-timer">{item.timer}</span>}
              </div>
              <div className="sports-info">
                <h4 className="sports-name">{item.name}</h4>
                <div className="sports-prices">
                  <span className="sports-price">{item.price}</span>
                  {item.oldPrice && <span className="sports-old-price">{item.oldPrice}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

            {/* 🔥 Updated Extra Images Section (Full Width) */}
      <div className="deals-extra-images">
        {extraImages.map((img, idx) => (
          <div key={idx} className="deals-extra-banner">
            <img src={img.img} alt={img.title} className="deals-extra-img" />
            <div className="deals-extra-center-text">
              <h3>{img.title}</h3>
              <a href="#" className="deals-extra-link">Shop Now</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Deals;