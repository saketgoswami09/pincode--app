import React, { useState } from 'react';

const PincodeDetails = ({ details }) => {
  const [filterText, setFilterText] = useState('');

  const handleFilterChange = (e) => {
    setFilterText(e.target.value.trim().toLowerCase());
  };

  const filteredDetails = details.filter(
    (detail) =>
      detail.Name.toLowerCase().includes(filterText) ||
      detail.District.toLowerCase().includes(filterText) ||
      detail.State.toLowerCase().includes(filterText)
  );

  return (
    <div className="pincode-details">
      <h2>Pincode Details</h2>
      <input
        type="text"
        placeholder="Filter by Post Office Name"
        value={filterText}
        onChange={handleFilterChange}
      />
      {filteredDetails.length === 0 ? (
        <p>Couldn’t find the postal data you’re looking for…</p>
      ) : (
        <div>
          {filteredDetails.map((detail, index) => (
            <div key={index} className="detail">
              <p>
                <strong>Post Office Name:</strong> {detail.Name}
              </p>
              <p>
                <strong>Pincode:</strong> {detail.Pincode}
              </p>
              <p>
                <strong>District:</strong> {detail.District}
              </p>
              <p>
                <strong>State:</strong> {detail.State}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PincodeDetails;
