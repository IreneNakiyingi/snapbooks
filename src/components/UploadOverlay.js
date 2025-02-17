import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const UploadOverlay = ({ uploads, setUploads, onComplete }) => {
  
  // Define the handleComplete function locally
  const handleComplete = (fileName) => {
    console.log(`${fileName} upload completed!`);
    onComplete(fileName); // Call the onComplete function passed as a prop
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setUploads((prevUploads) =>
        prevUploads.map((upload) => {
          if (upload.progress < 100) {
            return { ...upload, progress: upload.progress + 10 };
          }
          return upload;
        })
      );
    }, 500);

    return () => clearInterval(interval);
  }, [setUploads]);

  useEffect(() => {
    uploads.forEach((upload) => {
      if (upload.progress === 100) {
        handleComplete(upload.file.name); // Call the local handleComplete
      }
    });
  }, [uploads]);

  return (
    <div className="upload-overlay">
      {uploads.length > 0 && (
        <div className="upload-container">
          {uploads.map((upload, index) => (
            <div key={index} className="upload-item">
              <span>{upload.file.name} ({(upload.file.size / 1024).toFixed(2)} KB)</span>
              <div className="progress-bar">
                <div
                  className="progress-bar-fill error"
                  style={{ width: `${upload.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

UploadOverlay.propTypes = {
  uploads: PropTypes.arrayOf(
    PropTypes.shape({
      file: PropTypes.shape({
        name: PropTypes.string.isRequired,
        size: PropTypes.number.isRequired,
      }).isRequired,
      progress: PropTypes.number.isRequired,
    })
  ).isRequired,
  setUploads: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
};

export default UploadOverlay;
