// src/App.js (Main Logic)

import React, { useState, useEffect } from 'react';
import Dashboard from './Dashboard';
import './App.css'; 

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null);
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [error, setError] = useState('');

  // 1. CHECK LOCALSTORAGE ON LOAD
  useEffect(() => {
    const storedToken = localStorage.getItem('jwt_token');
    const storedUser = localStorage.getItem('current_user');
    
    if (storedToken && storedUser) {
      setToken(storedToken);
      setCurrentUser(storedUser);
    }
  }, []);

  // 2. LOGIN HANDLER (Connects to http://localhost:3000/login)
  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          username: usernameInput, 
          password: passwordInput 
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Success: Store token and user data
        localStorage.setItem('jwt_token', data.token);
        localStorage.setItem('current_user', usernameInput);
        setToken(data.token);
        setCurrentUser(usernameInput);
        
        setUsernameInput('');
        setPasswordInput('');
        
      } else {
        setError(data.message || 'Login failed. Check server status.');
      }
    } catch (err) {
      setError('Connection Error: Could not reach the API server.');
    }
  };

  // 3. LOGOUT HANDLER
  const handleLogout = () => {
    localStorage.removeItem('jwt_token');
    localStorage.removeItem('current_user');
    setToken(null);
    setCurrentUser(null);
  };

  // 4. RENDER LOGIC
  if (token && currentUser) {
    return <Dashboard username={currentUser} token={token} onLogout={handleLogout} />;
  }

  return (
    <div className="auth-card">
      <form onSubmit={handleLogin}>
        <h2>Experiment 2 Login (JWT)</h2>
        <p>Use: **testuser** / **password123**</p>
        <input
          type="text"
          placeholder="Username"
          value={usernameInput}
          onChange={(e) => setUsernameInput(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
          required
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default App;