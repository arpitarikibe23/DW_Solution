import React from 'react';
import './Features.css';

function Features() {
  const features = [
    { icon: '🚚', title: 'FREE DELIVERY', desc: 'On order over $49.00' },
    { icon: '🔒', title: 'ORDER PROTECTION', desc: 'Secured Information' },
    { icon: '🎁', title: 'PROMOTION GIFT', desc: 'Special Offer' },
    { icon: '💰', title: 'MONEY BACK', desc: 'Return over 30 days' },
    { icon: '💸', title: 'BIG SAVING', desc: 'Weekend Sales' },
  ];
  return (
    <div className="features">
      {features.map((f, i) => (
        <div key={i} className="feature-item">
          <span className="feature-icon">{f.icon}</span>
          <div>
            <h4>{f.title}</h4>
            <p>{f.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Features;