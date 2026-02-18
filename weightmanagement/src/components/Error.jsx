import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center text-center bg-secondary">
      <h1 className="display-1 text-danger">404</h1>
      <p className="lead">Page Not Found</p>
      <Link to="/" className="btn btn-primary mt-3">
        Go to Home
      </Link>
    </div>
  );
};

export default Error;