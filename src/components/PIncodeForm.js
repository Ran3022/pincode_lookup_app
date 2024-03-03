import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const PincodeForm = () => {
  const [pincode, setPincode] = useState('');
  const history = useHistory();

  const handleChange = (e) => {
    setPincode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/results/${pincode}`);
  };

  return (
    <div className="pincode-form">
      <h2>Enter Pincode</h2>
      <form id='form-container' onSubmit={handleSubmit}>
        <input
        id='form-input'
          type="text"
          placeholder="Enter 6-digit Pincode"
          value={pincode}
          onChange={handleChange}
        />
        <button type="submit">Lookup</button>
      </form>
    </div>
  );
};

export default PincodeForm;
