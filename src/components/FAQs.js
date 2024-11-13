// FAQ.js
import React, { useState } from 'react';
import './FAQs.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is SnapBook?",
      answer: "SnapBook is a comprehensive tool for managing your digital content and analytics.",
    },
    {
      question: "How do I upgrade to Premium?",
      answer: "To upgrade to Premium, go to the Pricing page and select the Premium plan.",
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, you can try SnapBook's Freemium plan at no cost.",
    },
  ];

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
    </div>
  );
};

export default FAQ;
