// FileUploadCard.js
import './FileUploadCard.css'
import React from 'react';

const FileUploadCard = ({ onFileChange }) => {
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    onFileChange(selectedFile);
  };

  return (
    <div className="card">
      <h2>Step 1: Select File </h2>
      <input type="file" onChange={handleFileChange} />
      Supported File Type: CSV,JSON
    </div>
  );
};

export default FileUploadCard;
