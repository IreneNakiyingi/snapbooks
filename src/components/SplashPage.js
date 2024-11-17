// src/components/SplashPage.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SplashPage.css';
import Logo from '../images/Snapbooks Logo.svg';

const SplashPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the landing page after 5 seconds
    const timer = setTimeout(() => navigate('/landing'), 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-container">
      <div className="logo">
        {/* Replace with actual logo or image */}
        <img src={Logo} alt="SnapBooks Logo" />
      </div>
      <h1>Empower</h1>
      <h1 className='Name'>SnapBooks</h1>
    </div>
  );
};

export default SplashPage;
