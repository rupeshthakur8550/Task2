// // MainComponent.js
// import React, { useState } from 'react';
// import FileUploadCard from './FileUploadCard';
// import DataSelectionCard from './DataSelectionCard';
// import TwoCardComponent from './TwoCardComponent';

// const MainComponent = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [dataSelection, setDataSelection] = useState(null);

//   const handleFileChange = (file) => {
//     setSelectedFile(file);
//   };

//   const handleSelectionChange = (selection) => {
//     setDataSelection(selection);
//   };

//   return (
//     <div>
//       {/* <FileUploadCard onFileChange={handleFileChange} />
//       {selectedFile && (
//         <DataSelectionCard file={selectedFile} onSelectionChange={handleSelectionChange} />
//       )} */}

//       <TwoCardComponent/>
//     </div>
//   );
// };

// export default MainComponent;




// MainComponent.js

import React, { useState } from 'react';
import FileUploadCard from './FileUploadCard';
import DataSelectionCard from './DataSelectionCard';
import DataDisplayCard from './DataDisplayCard';
import './MainComponent.css'; // Import the CSS file

const MainComponent = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [setDataSelection] = useState(null);

  const handleFileChange = (file) => {
    setSelectedFile(file);
  };

  const handleSelectionChange = (selection) => {
    setDataSelection(selection);
  };

  // Mock data for available and not available fields
  const availableFields = ['Product id', 'subcategory', 'Title','Price','Popularity','Description','Rating','UTM Source','UTM Medium'];
  const notAvailableFields = ['Product id', 'subcategory', 'Title'];

  return (
    <div className="main-container">
      <div className="two-card-container">
        <div className="card">
          <FileUploadCard onFileChange={handleFileChange} />
        </div>
        <div className="card">
          <DataSelectionCard file={selectedFile} onSelectionChange={handleSelectionChange} />
        </div>
      </div>
      <DataDisplayCard
        availableFields={availableFields}
        notAvailableFields={notAvailableFields}
      />
    </div>
  );
};

export default MainComponent;
