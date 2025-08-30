import React from 'react';
import './TrendingItem.css';

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
    numbers: [146, 4, 34, 57],
  },
];

function TrendingItem() {
  return (
    <section className="trending-item">
      <div className="trending-header">
        <span className="trending-title">TRENDING ITEM</span>
        <span className="trending-links">Bestselling | New Arrivals | Top Reviews</span>
      </div>
      <div className="trending-list">
        {products.map((product, idx) => (
          <div key={idx} className="trending-card">
            <div className="trending-img-wrap">
              <img src={product.img} alt={product.name} className="trending-img" />
              {product.discount && <span className="trending-discount">{product.discount}</span>}
              {product.badge && <span className="trending-badge">{product.badge}</span>}
              {product.numbers && (
                <div className="trending-numbers">
                  {product.numbers.map((num, i) => (
                    <span key={i} className="trending-number-circle">{num}</span>
                  ))}
                </div>
              )}
            </div>
            <div className="trending-info">
              <h4 className="trending-name">{product.name}</h4>
              <div className="trending-prices">
                <span className="trending-price">{product.price}</span>
                {product.oldPrice && <span className="trending-old-price">{product.oldPrice}</span>}
              </div>
              <div className="trending-rating">
                {'★'.repeat(product.rating)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrendingItem;
