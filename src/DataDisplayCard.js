// // DataDisplayCard.js
// import React from 'react';
// import './DataDisplayCard.css'; // Import the CSS file

// const DataDisplayCard = ({ availableFields, notAvailableFields }) => {
//   return (
//     <div className="card">
//       <h2>Data Display</h2>
//       <div className="column">
//         <h3>Available Fields</h3>
//         <ul>
//           {availableFields.map((field, index) => (
//             <li key={index}>{field}</li>
//           ))}
//         </ul>
//       </div>
//       <div className="column">
//         <h3>Not Available Fields</h3>
//         <ul>
//           {notAvailableFields.map((field, index) => (
//             <li key={index}>{field}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default DataDisplayCard;



// DataDisplayCard.js

import React from 'react';
import './DataDisplayCard.css'; // Import the CSS file

const DataDisplayCard = ({ availableFields, notAvailableFields }) => {
  return (
    <div className="card">
      <h2>Data Display</h2>
      <div className="columns-container">
        <div className="column">
          <h3>Available Fields</h3>
          <ul>
            {availableFields.map((field, index) => (
              <li key={index}>{field}</li>
            ))}
          </ul>
        </div>
        <div className="column">
          <h3>Not Available Fields</h3>
          <ul>
            {notAvailableFields.map((field, index) => (
              <li key={index}>{field}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DataDisplayCard;

