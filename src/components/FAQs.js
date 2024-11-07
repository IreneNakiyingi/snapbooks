// FAQ.js
import React, { useState } from 'react';
import './FAQs.css';

const FAQ = () => {
  const faqs = [
    { question: "How do I sign up for SnapBook?", answer: "Click 'Sign Up' on our homepage, fill in your details, and follow the steps." },
    { question: "Do I need any specific documents to start?", answer: "No, only basic personal information is required." },
    // Add other FAQs as needed
  ];

  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="faq">
      <h1>Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            {faq.question}
            <span>{openFAQ === index ? '-' : '+'}</span>
          </div>
          {openFAQ === index && <p className="faq-answer">{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
