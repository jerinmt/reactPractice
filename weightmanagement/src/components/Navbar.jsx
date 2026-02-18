import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/authSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.auth.username);

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(logout());
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/" style={{ fontFamily: 'Georgia, serif', fontSize: '2rem', fontWeight: 'bold', color: '#228804' }}>
          Weight Management
        </Link>
        <div className="d-flex align-items-center gap-3">
          {username ? (
            <>
              <span className='text-white'>Welcome, {username}</span>
              <button className="btn btn-link" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link className="nav-link" to="/login">Login</Link>
              <Link className="nav-link" to="/register">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;