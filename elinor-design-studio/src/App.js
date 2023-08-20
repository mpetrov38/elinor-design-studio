import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add other routes as needed, for example:
          <Route path="/about" element={<About />} /> 
          <Route path="/contact" element={<Contact />} /> 
          */}
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
