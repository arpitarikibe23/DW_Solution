import React from 'react';
import './Computer.css';

const products = [
  {
    img: '/images/download (1).jpg',
    name: 'Cow pasture jewel',
    price: '$300.00',
    oldPrice: '',
    rating: 5,
    badge: '',
    discount: '',
  },
  {
    img: '/images/images (14).jpg',
    name: 'Cold derastato',
    price: '$650.00',
    oldPrice: '',
    rating: 5,
    badge: '',
    discount: '',
  },
  {
    img: '/images/download (13).jpg',
    name: 'Denuacing pressure',
    price: '$399.00',
    oldPrice: '$420.00',
    rating: 5,
    badge: '',
    discount: '3%',
  },
  {
    img: '/images/download (14).jpg',
    name: 'Deserunt mollitia',
    price: '$480.00',
    oldPrice: '',
    rating: 5,
    badge: '',
    discount: '',
  },
  {
    img: '/images/download (15).jpg',
    name: 'Bitter et flores multi quis facilis',
    price: '$250.00',
    oldPrice: '',
    rating: 5,
    badge: 'Free Shipping',
    discount: '',
    // numbers: [146, 4, 34, 57],
  },
   
];

function Computer() {
  return (
    <section className="computer">
      <div className="computer-header">
        <span className="computer-title">COMPUTER</span>
        <span className="computer-links">Bestselling | New Arrivals | Top Reviews</span>
      </div>
      <div className="computer-list">
        {products.map((product, idx) => (
          <div key={idx} className="computer-card">
            <div className="computer-img-wrap">
              <img src={product.img} alt={product.name} className="computer-img" />
              {product.discount && <span className="computer-discount">{product.discount}</span>}
              {product.badge && <span className="computer-badge">{product.badge}</span>}
              {product.numbers && (
                <div className="computer-numbers">
                  {product.numbers.map((num, i) => (
                    <span key={i} className="computer-number-circle">{num}</span>
                  ))}
                </div>
              )}
            </div>
            <div className="computer-info">
              <h4 className="computer-name">{product.name}</h4>
              <div className="computer-prices">
                <span className="computer-price">{product.price}</span>
                {product.oldPrice && <span className="computer-old-price">{product.oldPrice}</span>}
              </div>
              <div className="computer-rating">
                {'★'.repeat(product.rating)}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Banner section below computer cards */}
      <div className="computer-banner">
        <img src="/images/flat-lay-desk-with-black-friday-shopping-bag.jpg" alt="Jacquard Wrap Knitted Microfiber Towel" className="computer-banner-img" />
        <div className="computer-banner-overlay">
          <div className="computer-banner-circle">75% OFF</div>
          <div className="computer-banner-content">
            <h3 className="computer-banner-title">Jacquard Wrap Knitted Microfiber Towel</h3>
            <p className="computer-banner-desc">Shop Now for the best deals!</p>
            <button className="computer-banner-btn">Shop Now</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Computer;
