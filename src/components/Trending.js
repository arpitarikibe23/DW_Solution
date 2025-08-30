import React from 'react';
import './Trending.css';

const trending = [
  {
    img: '/images/download.jpg',
    name: 'Cow pastram jewel',
    price: '$390.00',
    oldPrice: '',
    rating: 5,
    badge: '',
    discount: '',
  },
  {
    img: '/images/download (2).jpg',
    name: 'Cudi densitue',
    price: '$450.00',
    oldPrice: '',
    rating: 5,
    badge: '',
    discount: '',
  },
  {
    img: '/images/download (3).jpg',
    name: 'Denouncing pleasure',
    price: '$350.00',
    oldPrice: '$400.00',
    rating: 5,
    badge: 'Free Shipping',
    discount: '',
  },
  {
    img: '/images/download (12).jpg',
    name: 'Deserunt mollitia',
    price: '$450.00',
    oldPrice: '',
    rating: 5,
    badge: '',
    discount: '10%',
  },
  {
    img: '/images/download (4).jpg',
    name: 'Deserunt mollitia',
    price: '$450.00',
    oldPrice: '',
    rating: 5,
    badge: '',
    discount: '10%',
  },
];

function Trending() {
  return (
    <section className="trending">
      <div className="trending-header">
        <span className="trending-title">TRENDING ITEMS</span>
        <span className="trending-links">Bestselling | New Arrivals | Top Reviews</span>
      </div>
      <div className="trending-list">
        {trending.map((item, idx) => (
          <div key={idx} className="trending-card">
            <div className="trending-img-wrap">
              <img src={item.img} alt={item.name} className="trending-img" />
              {item.discount && <span className="trending-discount">{item.discount}</span>}
              {item.badge && <span className="trending-badge">{item.badge}</span>}
            </div>
            <div className="trending-info">
              <h4 className="trending-name">{item.name}</h4>
              <div className="trending-prices">
                <span className="trending-price">{item.price}</span>
                {item.oldPrice && <span className="trending-old-price">{item.oldPrice}</span>}
              </div>
              <div className="trending-rating">
                {'★'.repeat(item.rating)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Trending;
