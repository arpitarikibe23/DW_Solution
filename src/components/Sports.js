
// import React from 'react';
// import './Sports.css';

// const sports = [
//   { name: 'Alternative Two-Tone', price: '$300.00', oldPrice: '$320.00', img: '/images/tshirt.png', discount: '-13%' },
//   { name: 'Bohemian Printed Dress', price: '$420.00', oldPrice: '$480.00', img: '/images/dress.png', discount: '-21%' },
//   { name: 'congue nihil imperdiet', price: '$75.00 - $85.00', oldPrice: '', img: '/images/toy.png', discount: '-20%', timer: '511 04 34 57' },
//   { name: 'EcoSmart Fleece Hoodie', price: '$350.00', oldPrice: '', img: '/images/bag.png', discount: '' },
//   { name: 'Big Fat Flap Wallet', price: '$140.00', oldPrice: '', img: '/images/wallet.png', discount: '-36%' },
//   { name: 'Cillum Ham Hock', price: '$360.00', oldPrice: '', img: '/images/boot.png', discount: '' },
//   { name: 'Crochet Lace Dress', price: '$360.00', oldPrice: '', img: '/images/lace.png', discount: '-17%' },
//   { name: 'EcoSmart Fleece Hoodie', price: '$135.00', oldPrice: '', img: '/images/hoodie.png', discount: '-30%' },
// ];

// function Sports() {
//   return (
//     <section className="sports">
//       <h3 className="sports-title">SPORTS</h3>
//       <div className="sports-list">
//         {sports.map((item, idx) => (
//           <div key={idx} className="sports-item">
//             <div className="sports-img-wrap">
//               <img src={item.img} alt={item.name} className="sports-img" />
//               {item.discount && <span className="sports-discount">{item.discount}</span>}
//               {item.timer && <span className="sports-timer">{item.timer}</span>}
//             </div>
//             <div className="sports-info">
//               <h4 className="sports-name">{item.name}</h4>
//               <div className="sports-prices">
//                 <span className="sports-price">{item.price}</span>
//                 {item.oldPrice && <span className="sports-old-price">{item.oldPrice}</span>}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Sports;
