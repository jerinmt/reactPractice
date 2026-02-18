import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container text-center mt-5">
        <h1>Welcome to the Weight Management App</h1>
        <p>Track your weight and manage your health effectively.</p>
        <div className="mt-4">
          <Link to="/login" className="btn btn-primary mx-2">Login</Link>
          <Link to="/register" className="btn btn-secondary mx-2">Register</Link>
          <Link to="/profile" className="btn btn-success mx-2">Profile</Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;