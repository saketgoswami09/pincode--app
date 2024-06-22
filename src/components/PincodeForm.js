import React, { useState } from 'react';

const PincodeForm = ({ onSubmit, loading }) => {
  const [pincode, setPincode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(pincode);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="pincodeInput">Enter 6-digit Pincode:</label>
      <input
        type="text"
        id="pincodeInput"
        maxLength={6}
        value={pincode}
        onChange={(e) => setPincode(e.target.value)}
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Loading...' : 'Lookup'}
      </button>
    </form>
  );
};

export default PincodeForm;
