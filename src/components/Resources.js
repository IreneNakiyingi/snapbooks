// src/components/FeaturesDropdown.js
import React, { useState } from 'react';
import './Resources.css';

const resourcesList = [
    { name: "About Us", href: "#about-us" },
    { name: "FAQs", href: "#faqs" },
    { name: "Pricing", href: "#pricing" },
    { name: "Blogs", href: "#blogs" },
    {name: "Support", href: "#support"}
];

const ResourcesDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="resources-dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            <button className="dropdown-button">Resources</button>
            {isOpen && (
                <div className="dropdown-content">
                    {resourcesList.map(resource => (
                        <a key={resource.name} href={resource.href} className="dropdown-item">
                            {resource.name}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ResourcesDropdown;
