import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <Navbar />
      <div className="container d-flex flex-grow-1 justify-content-center align-items-center text-center">
        <div>
          <h1>Welcome to the Weight Management App</h1>
          <p>Track your weight and manage your health effectively.</p>
          <div className="mt-4">
            <Link to="/login" className="btn btn-primary mx-2">Login</Link>
            <Link to="/register" className="btn btn-warning mx-2">Register</Link>
            <Link to="/profile" className="btn btn-success mx-2">Profile</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;