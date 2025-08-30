
import React from 'react';
import './Categories.css';

const categories = [
  { name: 'WATCHES', img: '/images/shopping (1).webp' },
  { name: 'TOWELS COULD', img: '/images/images (2).jpg' },
  { name: 'SMARTPHONES', img: '/images/images (3).jpg' },
  { name: 'FURNICOMS', img: '/images/download (6).jpg' },
  { name: 'HEADPHONE', img: '/images/images (4).jpg' },
  { name: 'FASHION', img: '/images/images (5).jpg' },
  { name: 'FASHION', img: '/images/images.png' },
  { name: 'FASHION', img: '/images/images (7).jpg' },
  


];

function Categories() {
  return (
    <section className="categories">
      <h3>SHOP BY CATEGORIES</h3>
      <div className="categories-list">
        {categories.map((cat, idx) => (
          <div key={idx} className="category-item">
            <img src={cat.img} alt={cat.name} />
            <span>{cat.name}</span>
          </div>
        ))}
      </div>
      <div className="gift-special">
        <div className="gift-banner">
          <span className="gift-icon">🎁</span>
          <span className="gift-text">Gift Special</span>
          <span className="gift-desc">Wrap new offers / gift every single day on Weekends - New Coupon code: <span className="coupon">Happy2017</span></span>
          <button className="gift-btn">Get Coupon</button>
        </div>
      </div>
    </section>
  );
}

export default Categories;