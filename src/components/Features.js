// src/components/FeaturesDropdown.js
import React, { useState } from 'react';
import './Features.css';

const featuresList = [
    { name: "Smart Capture", href: "#smart-capture" },
    { name: "Financial Dashboard", href: "#financial-dashboard" },
    { name: "Credit Reports", href: "#credit-reports" },
    { name: "AI Assistant", href: "#ai-assistant" },
];

const FeaturesDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="features-dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            <button className="dropdown-button">Features</button>
            {isOpen && (
                <div className="dropdown-content">
                    {featuresList.map(feature => (
                        <a key={feature.name} href={feature.href} className="dropdown-item">
                            {feature.name}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FeaturesDropdown;
