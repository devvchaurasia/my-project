// src/Dashboard.js (The Protected View)

import React, { useState, useEffect } from 'react';

const Dashboard = ({ username, token, onLogout }) => {
  const [message, setMessage] = useState('Loading protected data...');
  const [error, setError] = useState(null);

  // Function to fetch data from the secure backend route
  useEffect(() => {
    const fetchProtectedData = async () => {
      try {
        const response = await fetch('http://localhost:3000/protected', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            // CRITICAL STEP: Sending the JWT as a Bearer token
            'Authorization': `Bearer ${token}`, 
          },
        });

        if (response.status === 401 || response.status === 403) {
          setError('Session expired or unauthorized access. Please log in again.');
          onLogout(); // Force logout if token is invalid
          return;
        }

        const data = await response.json();
        setMessage(`Data fetched: ${data.message}`);
        
      } catch (err) {
        setError('Could not connect to the backend server.');
      }
    };

    fetchProtectedData();
  }, [token, onLogout]);

  return (
    <div className="container">
      <h2>👋 Welcome, {username}! (Secured with JWT)</h2>
      
      <div className="protected-status">
        {error ? (
          <p className="error">{error}</p>
        ) : (
          <p className="success">{message}</p>
        )}
      </div>

      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;