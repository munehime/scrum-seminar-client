// LoginForm.js

import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsermname] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create an object with the user's credentials
    const credentials = {
      username,
      password,
    };

    try {
      // Send a POST request to your login API endpoint
      const response = await fetch('/your-login-api-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        // Login successful, handle the response as needed
        // For example, you may redirect the user to a dashboard.
      } else {
        // Handle login errors, display an error message, etc.
      }
    } catch (error) {
      // Handle any network or other errors
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Username:
        <input
          type="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Sign In</button>
    </form>
  );
};

export default LoginForm;
