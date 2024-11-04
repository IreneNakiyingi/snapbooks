import React from 'react';
import './AuthModal.css';
import snapBooksLogo from '../images/Asset 1.png';

const AuthModal = ({ isSignUp, onClose, setIsSignUp }) => {
  return (
    <div className="auth-modal-overlay">
      <div className="auth-modal">
        <button onClick={onClose} className="close-button">X</button>
        {isSignUp ? <SignUpForm setIsSignUp={setIsSignUp} /> : <SignInForm setIsSignUp={setIsSignUp} />}
      </div>
    </div>
  );
};

const SignUpForm = ({ setIsSignUp }) => (
  <div className='sign-up-container'>
    <a href="/" className="logo">
        <img src={snapBooksLogo} alt="SnapBooks Logo" />
      </a>
    <p>Get Started with SnapBooks</p>
    <p>Join thousands of MSMEs transforming their finances with AI-driven insights.</p>
    <div className='sign-up-form'>

    
    <form>
      <label>Name</label>
      <input type="text" placeholder="Enter your full name" />

      <label>Email Address</label>
      <input type="email" placeholder="Enter your email address" />

      <label>Password</label>
      <input type="password" placeholder="Create a password" />

      <label>Business Name</label>
      <input type="text" placeholder="Enter your business name" />

      <label>Industry</label>
      <select>
        <option>Select your industry</option>
        <option>Finance</option>
        <option>Retail</option>
        <option>Technology</option>
      </select>

      <label>
        <input type="checkbox" /> I agree to the Terms of Service and Privacy Policy
      </label>

      <button type="submit" className="primary-button">Create Account</button>
    </form>
    <p>Or Sign Up with</p>
    <div className="social-buttons">
      <button className="google">G</button>
      <button className="facebook">F</button>
      <button className="apple">A</button>
    </div>
    <p>Already have an account? <a href="#" onClick={() => setIsSignUp(false)}>Sign in now</a></p>
    </div>
  </div>
);

const SignInForm = ({ setIsSignUp }) => (
  <div>
    <h2>SnapBooks</h2>
    <p>Welcome Back to SnapBook</p>
    <p>Log in to access your dashboard and manage your finances.</p>
    <form>
      <label>Email Address</label>
      <input type="email" placeholder="Enter your email address" />

      <label>Password</label>
      <input type="password" placeholder="Create a password" />

      <a href="#">Forgot Password?</a>
      <button type="submit" className="primary-button">Log In</button>
    </form>
    <p>Or Sign in with</p>
    <div className="social-buttons">
      <button className="google">G</button>
      <button className="facebook">F</button>
      <button className="apple">A</button>
    </div>
    <p>New to SnapBooks? <a href="#" onClick={() => setIsSignUp(true)}>Create an account</a></p>
  </div>
);

export default AuthModal;
