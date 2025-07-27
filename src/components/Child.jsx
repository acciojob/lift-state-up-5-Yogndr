import React, { useState } from 'react';

const Child = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Basic validation
    if (username && password) {
      onLogin(); // Call onLogin only if validation passes
    } else {
      alert("Please enter both username and password.");
    }
  };

  return (
    <>
      <form>
      <label htmlFor="name">Username:</label>
      <input 
        type="text" 
        id="name" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />
      <br />
      <label htmlFor="pass">Password:</label>
      <input 
        type="password" 
        id="pass" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <br />
      <button onClick={handleLogin}>Login</button>
        </form>
    </>
  );
};

export default Child;
