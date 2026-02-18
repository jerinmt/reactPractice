import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="container mt-5 text-center">
      <h1>404</h1>
      <p>Page Not Found</p>
      <Link to="/" className="btn btn-primary">
        Go to Home
      </Link>
    </div>
  );
};

export default Error;