import React, { useState } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('User registered successfully!');
    navigate('/login');
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-secondary">
      <Navbar />
      <div className="container d-flex flex-grow-1 justify-content-center align-items-center">
        <div className="card shadow p-4" style={{ maxWidth: '400px', width: '100%' }}>
          <h2 className="text-center mb-4">Register</h2>
          <form onSubmit={handleRegister}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                id="username"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                id="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">Register</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;