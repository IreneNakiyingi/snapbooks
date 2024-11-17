// Footer.js
import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className='footer-item footer-LOGO'>
            <h2>SnapBooks</h2>
            <p>Bridging the financial gap for Africa's MSMEs, one transaction at a time.</p>
            <span className='Social-media'></span>
        </div>
        <div className='footer-item'>
            <h2>Features</h2>
            <ul>
                <li>Smart Capture</li>
                <li>Financial dashboard</li>
                <li>Credit Reports</li>
                <li>AI Assistant</li>
            </ul>
        </div>
        <div className='footer-item'>
            <h2>Resources</h2>
            <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/faqs">FAQs</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li>Blogs</li>
                <li>Support</li>
            </ul>
        </div>
        <div className='footer-item'>
            <h2>Information</h2>
            <ul>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
    
        <div className="footer-copyright">
            <p>&copy; 2024 SnapBooks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
