import React, { useState } from 'react';
import './App.css';
import PincodeForm from './components/PincodeForm';
import PincodeDetails from './components/PincodeDetails';
import ErrorMessage from './components/ErrorMessage';

function App() {
  const [pincodeDetails, setPincodeDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handlePincodeSubmit = async (pincode) => {
    setLoading(true);
    try {
      const response = await fetchPincodeDetails(pincode);
      if (response.ok) {
        const data = await response.json();
        const details = data[0].PostOffice;
        setPincodeDetails(details);
        setError('');
      } else {
        setError('Failed to fetch data. Please try again.');
        setPincodeDetails(null);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Failed to fetch data. Please check your internet connection.');
      setPincodeDetails(null);
    } finally {
      setLoading(false);
    }
  };

  const fetchPincodeDetails = async (pincode) => {
    const url = `https://api.postalpincode.in/pincode/${pincode}`;
    return await fetch(url);
  };

  return (
    <div className="App">
      <h1>Pincode Lookup</h1>
      <PincodeForm onSubmit={handlePincodeSubmit} loading={loading} />
      {error && <ErrorMessage message={error} />}
      {pincodeDetails && <PincodeDetails details={pincodeDetails} />}
    </div>
  );
}

export default App;
