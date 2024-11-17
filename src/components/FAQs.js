// FAQ.js
import React, { useState } from 'react';
import './FAQs.css';
import Footer from './Footer';
const faqs = [
    {
      question: "What is SnapBooks?",
      answer: "SnapBooks is a comprehensive tool for managing your digital content and analytics.",
    },
    {
      question: "How do I sign up for Snapbooks?",
      answer: "Click 'Sign Up' on our homepage, fill in your details and follow the simple steps to set up your account."
    },
    {
      question: "Do I need any specific documents to start?",
      answer: "No, we require your email address, your selected password and a few details about your business."
    },
    {
      question: "How does Smart Capture work?",
      answer: "xxx"
    },
    {
      question: "Can i access SnapBooks on mobile and desktop?",
      answer: "For now, SnapBooks is only available on desktop."
    },
    {
      question: "Is my data safe with SnapBooks?",
      answer: "Yes, any information deemed sensitive is encrypted and protected from malware."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, you can try SnapBook's Freemium plan at no cost.",
    },
    {
      question: "What is included in the free version?",
      answer: "xxx"
    },
    {
      question: "How do I upgrade to Premium?",
      answer: "To upgrade to Premium, go to the Pricing page and select the Premium plan.",
    },
    
  ];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq">
      <h1>FAQs</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              <span>{faq.question}</span>
              <button className="toggle-button">
                {activeIndex === index ? "-" : "+"}
              </button>
            </div>
            {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
      <div className='contact-form'>
        <h2>Still have Questions?</h2>
        <p>Contact us via any of our social media platforms or chat</p>
        <button className='contact-form contact-button'>Contact Us</button>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default FAQ;
