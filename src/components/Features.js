import React from 'react';
import './Features.css';
import { FaTruck, FaLock, FaGift, FaUndo, FaTags } from 'react-icons/fa';

function Features() {
  const features = [
    { icon: <FaTruck />, title: 'FREE DELIVERY', desc: 'On order over $49.00' },
    { icon: <FaLock />, title: 'ORDER PROTECTION', desc: 'Secured Information' },
    { icon: <FaGift />, title: 'PROMOTION GIFT', desc: 'Special Offer' },
    { icon: <FaUndo />, title: 'MONEY BACK', desc: 'Return over 30 days' },
    { icon: <FaTags />, title: 'BIG SAVING', desc: 'Weekend Sales' },
  ];

  return (
    <div className="features">
      {features.map((f, i) => (
        <div key={i} className="feature-item">
          <div className="feature-icon">{f.icon}</div>
          <h4>{f.title}</h4>
          <p>{f.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default Features;
