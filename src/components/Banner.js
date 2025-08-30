import React from 'react';
import './Banner.css';

function Banner() {
  return (
    <section className="banner">
      <img src="/images/young-happy-woman-shopper-showing-okay-sign-winking-pleased-with-good-discounts-buying-staff-sale-holding-shopping-bags-smiling-pleased-pink-background.jpg" alt="Hot Right Now" className="banner-img" />
      <div className="banner-text">
        <h2>HOT RIGHT NOW</h2>
        <p>Summer whites and bright tropical prints capture a breezy, island vibe.</p>
        <button>Shop Now</button>
      </div>
    </section>
  );
}

export default Banner;