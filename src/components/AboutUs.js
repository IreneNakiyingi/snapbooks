// src/components/AboutUs.js
import React from 'react';
import './AboutUs.css';
import Footer from './Footer';

// src/components/AboutUsHeader.js

const teamMembers = [
  { name: 'Onyebuchi Chisom', role: 'Product Manager', imageUrl: '/images/member1.jpg' },
  { name: 'Ese Oshioste', role: 'Product Manager', imageUrl: '/images/member2.jpg' },
  { name: 'Irene Nakiyingi', role: 'FullStack Software Developer', imageUrl: '/images/member3.jpg' },
  { name: 'AbdulSamad AbdulJaleel', role: 'AI/ML Developer', imageUrl: '/images/member4.jpg' },
  { name: 'Toluwanimi Ogbonna', role: 'Product Designer', imageUrl: '/images/member5.jpg' }
];
const values = [
  { title: 'Innovation', description: 'We leverage AI technology to automate financial processes.' },
  { title: 'Accessibility', description: 'Our platform is designed for MSMEs to manage finances easily.' },
  { title: 'Empowerment', description: 'We empower MSMEs with financial knowledge and tools.' }
];

const AboutUsHeader = () => (
  <div className='about-us-page'>
  <div className="about-header">
    <h1>Who are we?</h1>
    <p>
      Founded by a team of financial analysts, designers, and engineers, SnapBooks aims to aid Africa's MSMEs in transforming
      their financial records into digital format, bridging the financial gap, and empowering them with financial knowledge.
    </p>
  </div>
  <div className="mission">
    <h2>Our Mission</h2>
    <p>
      At SnapBooks, we believe every business should have access to the tools and knowledge needed for success. We aim to
      bridge the financial gap for Africa's MSMEs by providing easy-to-use tools for efficient financial management.
    </p>
  </div>
  <div className="vision">
    <h2>Our Vision</h2>
    <p>
      SnapBooks aims to empower and transform African MSMEs by offering technology that fosters business growth and enables
      financial independence.
    </p>
  </div>
  <div className="core-values">
    <h2>Core Values</h2>
    <div className="values-grid">
      {values.map((value, index) => (
        <div key={index} className="value-card">
          <h3>{value.title}</h3>
          <p>{value.description}</p>
        </div>
      ))}
    </div>
  </div>
  <div className="team-section">
    <h2>Meet the Team</h2>
    <div className="team-grid">
      {teamMembers.map((member, index) => (
        <div key={index} className="team-card">
          <img src={member.imageUrl} alt={member.name} className="team-image" />
          <h3>{member.name}</h3>
          <p>{member.role}</p>
        </div>
      ))}
    </div>
    <Footer/>
  </div>
</div>
);

export default AboutUsHeader;
