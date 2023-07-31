import React from 'react';
import'./App.css';
import Home from './components/pages/Home.js';
import Service from './components/pages/Service.js';
import Contact from './components/pages/Contact.js';
import Navbar from './components/include/Navbar.js';
import Footer from './components/include/Footer.js'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Clientes from './components/pages/include/Clientes';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Client" element={<Clientes />} /> 
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
