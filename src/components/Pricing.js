// src/components/Pricing.js
import React from 'react';
{/*import './Pricing.css';*/}

const Pricing = () => {
  return (
    <div className="pricing-container">
      <h1>Pricing</h1>
      <div className="pricing-tiers">
        <div className="tier">
          <h2>Basic</h2>
          <p>Free</p>
          <p>Basic tracking and reports</p>
        </div>
        <div className="tier">
          <h2>Standard</h2>
          <p>$10/month</p>
          <p>Advanced features and custom reports</p>
        </div>
        <div className="tier">
          <h2>Premium</h2>
          <p>$20/month</p>
          <p>All features, priority support, and more</p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
