import React, { useState } from 'react';
import AuthModal from './AuthModal';
import FeaturesDropdown from './Features';
import ResourcesDropdown from './Resources';
import snapBooksLogo from '../images/Asset 1.png';
import './Nav.css'


const NavBar = () => {
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
  return(
    <div className="landing-container">
    {/* Navigation Bar */}
        <nav className="nav-bar">
      <a href="/" className="logo">
        <img src={snapBooksLogo} alt="SnapBooks Logo" />
      </a>
      <div className="nav-links">
        
        <a href="/landing" className='home'>Home</a>
        <FeaturesDropdown/>
        <ResourcesDropdown/>
        
      </div>
      <div className="auth-buttons">
      <button onClick={openSignUp} className='signup-button'>Signup</button>
      <button onClick={openSignIn} className='signin-button'>SignIn</button>
      </div>
    </nav>
    {/* AuthModal component for sign-in/sign-up */}
      
    {showAuthModal && (
        <AuthModal isSignUp={isSignUp} onClose={closeModal} />
      )}
    </div>
  );
};
export default NavBar;