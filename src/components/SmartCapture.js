/* File: src/components/SmartCapturePage.jsx */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UploadOverlay from './UploadOverlay';
import RecentCaptures from './RecentCapture';
import './SmartCapture.css'; 
import Footer from './Footer';
import NavBar from './Nav';

// File: src/components/SmartCapturePage.jsx


const SmartCapturePage = () => {
  const [uploads, setUploads] = useState([]);
  const [recentCaptures, setRecentCaptures] = useState([]);

  // Fetch recent captures from the backend
  useEffect(() => {
    const fetchCaptures = async () => {
      try {
        const response = await axios.get("/api/recent-captures");
        setRecentCaptures(response.data);
      } catch (error) {
        console.error("Failed to fetch recent captures:", error);
      }
    };

    fetchCaptures();
  }, []);

  // Handles file uploads
  const handleFileUpload = (files) => {
    const newUploads = Array.from(files).map((file) => ({
      file,
      progress: 0,
    }));
    setUploads((prev) => [...prev, ...newUploads]);
  };

  // Handles drag-and-drop
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const files = e.dataTransfer.files;
    handleFileUpload(files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleComplete = (fileName) => {
    console.log(`Upload complete: ${fileName}`);
  };

  return (
    <div className="smart-capture-page">
      {/* Left-side Navigation */}
      <aside className="side-nav">
        <div className="logo">SnapBooks</div>
        <ul className="menu">
          <li><a href="/dashboard">Dashboard</a></li>
          <li className="active"><a href="/smart-capture">Smart Capture</a></li>
          <li><a href="/ai-insights">AI Insights</a></li>
          <li><a href="/credit-reports">Credit Reports</a></li>
          <li><a href="/goals-budgeting">Goals & Budgeting</a></li>
          <li><a href="/assistant">SnapBooks Assistant</a></li>
          <li><a href="/resources">Resources</a></li>
          <li><a href="/settings">Settings</a></li>
        </ul>
      </aside>

      <main className="content">
        <NavBar />

        <h1>Smart Capture</h1>
        <p>Capture receipts, invoices, and records instantly and add them to your financial dashboard.</p>

        {/* Upload Section */}
        <div
          className="upload-section"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <div className="upload-area">
            <img src="receipt-icon.png" alt="Receipt Icon" className="upload-icon" />
            <button onClick={() => document.getElementById("file-input").click()} className="upload-button">
              Scan a Document
            </button>
            <p className="upload-instructions">OR</p>
            <button onClick={() => document.getElementById("file-input").click()} className="upload-button">
              Upload from Gallery
            </button>
            <input
              type="file"
              id="file-input"
              multiple
              style={{ display: "none" }}
              onChange={(e) => handleFileUpload(e.target.files)}
            />
          </div>
        </div>

        {/* Recent Captures Section 
        <section className="recent-captures">
          <header className="recent-header">
            <h2>Recent Captures</h2>
            <a href="#" className="view-all">View All</a>
          </header>
          <table className="captures-table">
            <thead>
              <tr>
                <th>Thumbnail</th>
                <th>Transaction Title</th>
                <th>Date</th>
                <th>Amount (₦)</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentCaptures.map((capture, index) => (
                <tr key={index}>
                  <td><img src={capture.thumbnail} alt="Thumbnail" className="thumbnail" /></td>
                  <td>{capture.title}</td>
                  <td>{capture.date}</td>
                  <td>{capture.amount.toLocaleString()}</td>
                  <td className={`status ${capture.status === "Saved" ? "saved" : "pending"}`}>
                    {capture.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>*/}
        <RecentCaptures captures={recentCaptures}  />

        <UploadOverlay uploads={uploads} setUploads={setUploads} onComplete={handleComplete} />

        <Footer />
      </main>
    </div>
  );
};

export default SmartCapturePage;
