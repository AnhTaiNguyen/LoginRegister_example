import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../api/axiosConfig';
import '../App.css';

export default function SignUpPage() {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
     

    try {
      const response = await axios.post('/signin', {
        usernameOrEmail,
        password,
      });

      if (response.status === 200) {
        // Login successful
        window.location.href = 'https://www.calofic.com.vn/';
        setSuccessMessage('Login successful!');
      }else {
        // Login failed, handle the error
        console.log('Login failed:', response.data);
      }
    } catch (error) {
        console.error('Error occurred during login:', error);
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}
      <form onSubmit={handleSubmit}>
        <p>
          <label>Username Or Email </label>
          <br />
          <input
            type="text"
            name="username"
            value={usernameOrEmail}
            onChange={(e) => setUsernameOrEmail(e.target.value)}
            required
          />
        </p>
        <p>
          <label>Password</label>
          <br />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </p>
        <p>{error && <span className="error">{error}</span>}</p>
        <p>
          <button id="sub_btn" type="submit">Login</button>
        </p>
      </form>
      <footer>
        <p>
          <Link to="/">Back to Homepage</Link>
        </p>
      </footer>
    </div>
  );
}
