import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PincodeResults = () => {
  const { pincode } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [postalData, setPostalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]); // Initialize with an empty array
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await axios.get(`https://api.postalpincode.in/pincode/${pincode}`);
        const data = response.data[0].PostOffice;
        setPostalData(data);
        setFilteredData(data);
      } catch (error) {
        setError('Error fetching data. Please try again.');
      }
      setLoading(false);
    };

    fetchData();
  }, [pincode]);

  const handleFilter = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const filtered = postalData.filter((item) =>
      item.Name.toLowerCase().includes(searchTerm)
    );
    setFilteredData(filtered);
    if (filtered.length === 0) {
      setError("Couldn't find the postal data you’re looking for…");
    } else {
      setError('');
    }
  };

  if (loading) {
    return <div className="loader">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="container">
      <h1>Pincode Results for {pincode}</h1>
      <br /><br />
      <div className="pincodes-found"><h2>Message : {filteredData.length} pincodes found</h2></div>
      <input
        type="text"
        placeholder="Filter by Post Office Name"
        value={searchTerm}
        onChange={handleFilter}
        className="search-filter"
      />
      <div className="result-container">
        {filteredData.map((item, index) => (
          <div key={index} className="result-box">
            <div><strong>Name:</strong> {item.Name}</div>
            <div><strong>Branch Type:</strong> {item.BranchType}</div>
            <div><strong>Delivery Status:</strong> {item.DeliveryStatus}</div>
            <div><strong>District:</strong> {item.District}</div>
            <div><strong>State:</strong> {item.State}</div>
          </div>
        ))}
      </div>
      {error && (
        <div className="error">{error}</div>
      )}
    </div>
  );
};

export default PincodeResults;
