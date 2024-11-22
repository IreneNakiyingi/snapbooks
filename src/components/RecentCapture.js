
// File: src/components/RecentCaptures.jsx
import React from 'react';
//import './RecentCaptures.css';


const RecentCaptures = ({ captures }) => {
  return (
    <div className="recent-captures">
      <h2>Recent Captures</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {captures.map((capture, index) => (
            <tr key={index}>
              <td>{capture.title}</td>
              <td>{capture.date}</td>
              <td>{capture.amount}</td>
              <td>{capture.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentCaptures;
