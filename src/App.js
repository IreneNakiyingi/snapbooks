// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashPage from './components/SplashPage';
import LandingPage from './components/LandingPage';
import AboutUs from './components/AboutUs';
import FAQs from './components/FAQs';
import Pricing from './components/Pricing';
import SmartCapturePage from './components/SmartCapture';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/smart-capture" element = {<SmartCapturePage/>} />
      </Routes>
    </Router>
  );
}

export default App;
