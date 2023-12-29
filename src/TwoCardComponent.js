// TwoCardComponent.js

import React, { useState } from 'react';
import FileUploadCard from './FileUploadCard';
import DataSelectionCard from './DataSelectionCard';
import './TwoCardComponent.css'; // Import the CSS file

const TwoCardComponent = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [dataSelection, setDataSelection] = useState(null);

  const handleFileChange = (file) => {
    setSelectedFile(file);
  };

  const handleSelectionChange = (selection) => {
    setDataSelection(selection);
  };

  return (
    <div className="two-card-container">
      <div className="card">
        <FileUploadCard onFileChange={handleFileChange} />
      </div>
      <div className="card">
        <DataSelectionCard file={selectedFile} onSelectionChange={handleSelectionChange} />
      </div>
    </div>
  );
};

export default TwoCardComponent;
