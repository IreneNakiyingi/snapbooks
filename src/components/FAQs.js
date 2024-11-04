// src/components/FAQs.js
import React from 'react';
{/*import './FAQs.css';*/}

const FAQs = () => {
  const faqs = [
    { question: "What is SnapBooks?", answer: "SnapBooks is a financial tracking tool for small businesses." },
    { question: "How much does SnapBooks cost?", answer: "We offer different pricing tiers. Check our Pricing page for more details." },
    { question: "Is SnapBooks secure?", answer: "Yes, SnapBooks implements the latest security measures to protect your data." },
  ];

  return (
    <div className="faqs-container">
      <h1>Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="faq">
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FAQs;
