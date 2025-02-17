// src/components/FeaturesDropdown.js
import React, { useState } from 'react';
import './Features.css';
import { Link } from 'react-router-dom';

const featuresList = [
    { name: "Smart Capture", to : "/smart-capture"},
    { name: "Financial Dashboard", to: "/financial-dashboard" },
    { name: "Credit Reports", to: "/credit-reports" },
    { name: "AI Assistant", to: "/ai-assistant" },
];

const FeaturesDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div 
        className="features-dropdown" 
        onMouseEnter={toggleDropdown} 
        onMouseLeave={toggleDropdown}>
            <button className="dropdown-button">Features</button>
            {isOpen && (
                <div className="dropdown-content">

                    {featuresList.map(feature => (
                        <Link 
                        key={feature.name} 
                        to={feature.to} 
                        className="dropdown-item">
                            {feature.name}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FeaturesDropdown;
