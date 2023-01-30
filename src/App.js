import React from 'react';
import'./App.css';
import Home from './components/pages/Home.js';
import About from './components/pages/About.js';
import Contact from './components/pages/Contact.js';
import Navbar from './components/include/Navbar.js';
import Footer from './components/include/Footer.js'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
