import React, { useState } from "react";
import "./App.css";

function App() {
  // 1. State variables for input fields and error message
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission (page reload)

    // 2. Basic Validation Check
    if (!username || !password) {
      setError("Please enter both username and password.");
      return; // Stop the function if validation fails
    }

    // 3. Success Logic
    setError(""); // Clear any previous error
    
    // Log data to the console (as requested by the task)
    console.log("Username:", username);
    console.log("Password:", password);
    
    // Optional: Alert the user
    alert(`Login Successful!\nWelcome ${username}`);
    
    // Optional: Clear fields after successful submission
    // setUsername("");
    // setPassword("");
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // Real-time state update
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Real-time state update
        />
        
        {/* Display error message if the error state is not empty */}
        {error && <p className="error">{error}</p>}
        
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;