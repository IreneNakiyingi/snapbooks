// Pricing.js
import React from 'react';
import './Pricing.css';
import Footer from './Footer';
import NavBar from './Nav';

const Pricing = () => {
  const featuresFreemium = [
    "Basic data capture",
    "Dashboard access",
    "Limited reports",
  ];

  const featuresPremium = [
    "Advanced data capture",
    "Full dashboard access",
    "Unlimited reports",
    "AI assistant",
    "Priority support",
  ];

  return (
    <div className="pricing">
      <NavBar/>
      <h1>Pricing</h1>
      <div className="pricing-plans">
        <div className="pricing-plan">
          <h2>Freemium</h2>
          <p>Basic tools for getting started.</p>
          <ul className="features-list">
            {featuresFreemium.map((feature, index) => (
              <li key={index} className="feature-item">
                <span className="checkmark">✔</span> {feature}
              </li>
            ))}
          </ul>
          <button className="try-free">Try SnapBook for free</button>
        </div>

        <div className="pricing-plan premium">
          <h2>Premium</h2>
          <p>Advanced tools and insights for business growth.</p>
          <ul className="features-list">
            {featuresPremium.map((feature, index) => (
              <li key={index} className="feature-item">
                <span className="checkmark">✔</span> {feature}
              </li>
            ))}
          </ul>
          <button className="upgrade">Upgrade to Premium</button>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Pricing;
