import React from 'react';
import Header from './components/header';
import Hero from './components/hero';
import Footer from './components/footer';
import Category from './components/category';
import Bestseller from './components/bestseller';
import Promotional from './components/promotional';
import News from './components/news';
import About from './components/about';

const App = () => {
  return (
    <>
    <Header />
    <Hero />
    <Category />
    <Bestseller />
    <Promotional />
    <About />
    <News />
    <Footer />
    </>
  );
};

export default App;