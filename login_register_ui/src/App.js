import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import LandingPage from './components/LandingPage';


import './App.css'

export default function App() {
    return (
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </div>
      </Router>
    );
  }


