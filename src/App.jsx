import React from 'react';

import Header from './components/Header/Header';
import About from './components/About/About';
import Work from './components/Work/Work';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';
import { Navbar } from './components/Navbar/Navbar';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
  );
};

export default App;
