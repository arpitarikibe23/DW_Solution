import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Features from './components/Features';
import Categories from './components/Categories';
import Deals from './components/Deals';
// import Sports from './components/Sports';
import Computer from './components/Computer';
import Trending from './components/Trending';
import Blog from './components/Blog';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Features />
      <Categories />
      <Deals />
      {/* <Sports /> */}
      <Computer />
      <Trending />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
