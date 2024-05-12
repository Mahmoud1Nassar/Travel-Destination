import React from 'react';
import Header from '../header/Header.js';
import Tours from '../tours/Tours.js';
import Footer from '../footer/Footer.js';

import '../home/Home.css';
const Home = () => {
  return (
    <>
    <div>
      <Header />
      <Tours />
      <Footer />
    </div>
    </>
  );
};

export default Home;
