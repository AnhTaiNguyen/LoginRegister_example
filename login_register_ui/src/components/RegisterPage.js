import React, { useState } from 'react';
import "../App.css";
import axios from '../api/axiosConfig';
import { Link } from 'react-router-dom';


export default function RegisterPage () {
  const [name, setName] = useState('');  
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');


  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/signup', {
        name,
        username,
        email,
        password,
      })
      if (response.status === 200) {
        // Register successful
        setSuccessMessage('Register successful!');
      }else {
        // Register failed, handle the error
        console.log('Login failed:', response.data);
      }
    } catch(error) {
      console.log("Error occur during register", error);
    }
  };

  return (
    <div className="register-page">
      <h2>Create your personal account</h2>
      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}
      <form onSubmit={handleRegister} className="register-form">
      <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
          />
        </div>
        <button id="sub_btn" type="submit" className="btn btn-primary">Register</button>
      </form>
      <Link to="/login">Go to Login Page</Link>
    </div>
  );
};


