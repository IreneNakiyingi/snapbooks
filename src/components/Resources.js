// src/components/FeaturesDropdown.js
import React, { useState } from 'react';
import './Resources.css';
import { Link } from 'react-router-dom';
const resourcesList = [
    { name: "About Us", to: "/about" },
    { name: "FAQs", to: "/faqs" },
    { name: "Pricing", to : "/pricing" },
    { name: "Blogs", to: "/blogs" },
    {name: "Support", to : "/support"}
];

const ResourcesDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="resources-dropdown" 
        onMouseEnter={toggleDropdown} 
        onMouseLeave={toggleDropdown}>
            <button className="dropdown-button">Resources</button>
            {isOpen && (
                <div className="dropdown-content">
                    {resourcesList.map(resource => (
                        <Link key={resource.name}
                         to={resource.to} 
                         className="dropdown-item">
                            {resource.name}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ResourcesDropdown;
