// src/components/LandingPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthModal from './AuthModal';
import './LandingPage.css';
import snapBooksLogo from '../images/Asset 1.png';

const LandingPage = () => {
  // State to control the modal's visibility and type
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);


  // Functions to open and close the modal
  const openSignUp = () => {
    setIsSignUp(true);
    setShowAuthModal(true);
  };

  const openSignIn = () => {
    setIsSignUp(false);
    setShowAuthModal(true);
  };

  const closeModal = () => {
    setShowAuthModal(false);
  };

  return (
    <div className="landing-container">
    {/* Navigation Bar */}
    <nav className="nav-bar">
      <a href="/" className="logo">
        <img src={snapBooksLogo} alt="SnapBooks Logo" />
      </a>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#features">Features</a>
        <a href="#resources">Resources</a>
        
      </div>
      <div className="auth-buttons">
      <button onClick={openSignUp} className='signup-button'>Signup</button>
      <button onClick={openSignIn} className='signin-button'>SignIn</button>
      </div>
    </nav>

    {/* Hero Section */}
    <header className="hero-section">
      <h1>Organize your Finances; Simplify your life</h1>
      <p>Empowering small businesses with AI-driven bookeeping, financial
        insights, and credit-ready reports.
      </p>
      <button className="cta-button">Input your email
        <button>Sign Up</button>
      </button>
    </header>

    {/* Features Section */}
    <section id="features" className="features-section">
        <p> All-in-one Financial Solution for MSMEs</p>
      <div className="feature">
        {/*<img src="/images/feature1-icon.svg" alt="Feature 1" />*/}
        <h2>AI-Powered Bookeeping</h2>
        <p>Turn handwritten records into digital data in seconds. SnapBooks uses AI to automate your 
            bookkeeping, making financial management seamless.</p>
            <div id='feature-img'>
                <img src="/images/feature1-icon.svg" alt="Feature 1" />
            </div>
      </div>
      <div className="feature">
        <h2>Instant Financial Insights</h2>
        <p>Access real-time analytics and get AI-driven summaries of cash flow, 
            expenses, and revenue, presented in a user-friendly dashboard.</p>
        <div id='feature-img'>
            <img src="/images/feature2-icon.svg" alt="Feature 2" />
        </div>
      </div>
      <div className="feature">
        
        <h2>Credit-Ready Reports</h2>
        <p>Generate formal financial reports to help qualify for loans and funding opportunities.</p>
        <div id='feature-img'>
            <img src="/images/feature3-icon.svg" alt="Feature 3" />
        </div>
      </div>
      <div className="feature">
        
        <h2>Conversational AI Support</h2>
        <p>Receive voice summaries and insights in your preferred language for an accessible, personalized experience.</p>
        <div id='feature-img'>
            <img src="/images/feature4-icon.svg" alt="Feature 4" />
        </div>
      </div>
    </section>
    <section className='body'>
        <div>
            <h1 className='body-heading'>Why choose Empower?</h1>
            <div className='body-content'>
                <div className='body-images'>
                    <img></img>
                    <h1>Simplified Financial Management</h1>
                    <p>Say goodbye to manual bookkeeping and let SnapBooks do the work for you. Our AI-driven tools 
                        help you stay on top of your finances effortlessly.</p>
                </div>
                <div className='body-images'>
                    <img></img>
                    <h1>Affordable Acess to Capital</h1>
                    <p>Our credit-ready reports make it easier for you to 
                        secure funding, regardless of your business size or credit history.</p>
                </div>
                <div className='body-images'>
                    <img></img>
                    <h1>Simplified Financial Management</h1>
                    <p>Say goodbye to manual bookkeeping and let SnapBook do the work for you. Our AI-driven tools 
                        help you stay on top of your finances effortlessly.</p>
                </div>
            </div>
        </div>

    </section>

    {/* Footer */}
    <footer className='footer'>
        <div className='footer-item-LOGO'>
            <h1>SnapBooks</h1>
            <p>Bridging the financial gap for Africa's MSMEs, one transaction ata at time</p>
            <span className='Social-media'></span>
        </div>
        <div className='footer-item'>
            <h1>FEATURES</h1>
            <ul>
                <li>Smart Capture</li>
                <li>Financial dashboard</li>
                <li>Credit Reports</li>
                <li>AI Assistant</li>
            </ul>
        </div>
        <div className='footer-item'>
            <h1>RESOURCES</h1>
            <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/faqs">FAQs</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li>Blogs</li>
                <li>Support</li>
            </ul>
        </div>
        <div className='footer-item'>
            <h1>INFORMATION</h1>
            <ul>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
     
    </footer>
    <p>&copy; 2024 SnapBooks. All rights reserved.</p>
      {/* AuthModal component for sign-in/sign-up */}
      
      {showAuthModal && (
        <AuthModal isSignUp={isSignUp} onClose={closeModal} />
      )}
    </div>
  );
};

export default LandingPage;
