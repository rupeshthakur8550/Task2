// DataSelectionCard.js
import './DataSelectionCard.css'

import React, { useState } from 'react';

const DataSelectionCard = ({ file, onSelectionChange }) => {
  const [fileType, setFileType] = useState('');
  const [charEncoding, setCharEncoding] = useState('');
  const [delimiterCode, setDelimiterCode] = useState('');

  const handleSelectionChange = () => {
    // Pass the selected values to the parent component
    onSelectionChange({ fileType, charEncoding, delimiterCode });
  };

  return (
    <div className="card">
      <h2>Card 2: Data Selection</h2>
      <div>
        <label>File Type:</label>
        <select value={fileType} onChange={(e) => setFileType(e.target.value)}>
          <option value="csv">CSV</option>
          <option value="excel">Excel</option>
          {/* Add other file types as needed */}
        </select>
      </div>
      <div>
        <label>Character Encoding:</label>
        <select value={charEncoding} onChange={(e) => setCharEncoding(e.target.value)}>
          <option value="utf-8">UTF-8</option>
          <option value="iso-8859-1">ISO-8859-1</option>
          {/* Add other character encodings as needed */}
        </select>
      </div>
      <div>
        <label>Delimiter Code:</label>
        <select value={delimiterCode} onChange={(e) => setDelimiterCode(e.target.value)}>
          <option value="comma">Comma (,)</option>
          <option value="semicolon">Semicolon (;)</option>
          {/* Add other delimiter codes as needed */}
        </select>
      </div>
      <button onClick={handleSelectionChange}>Submit</button>
    </div>
  );
};

export default DataSelectionCard;
