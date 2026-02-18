import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import checkAuth from '../utils/checkAuth';
import Navbar from './Navbar';
import Footer from './Footer';

const Profile = () => {
  const [weight, setWeight] = useState('');
  const [weights, setWeights] = useState([]);

  const username = useSelector((state) => state.auth.username);

  useEffect(() => {
    const allWeights = JSON.parse(localStorage.getItem('weights')) || [];
    setWeights(allWeights.filter((entry) => entry.username === username));
  }, [username]);

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [weightDifference, setWeightDifference] = useState(null);

  const handleAddWeight = (e) => {
    e.preventDefault();
    const today = new Date().toISOString().split('T')[0];
    if (weights.some((entry) => entry.date === today)) {
      alert('You can only add weight once per day.');
      return;
    }
    const newWeight = { weight, date: today, username };
    const allWeights = JSON.parse(localStorage.getItem('weights')) || [];
    const updatedWeights = [...allWeights, newWeight];
    setWeights(updatedWeights.filter((entry) => entry.username === username));
    localStorage.setItem('weights', JSON.stringify(updatedWeights));
    setWeight('');
  };

  const calculateWeightDifference = () => {
    const startWeight = weights.find((entry) => entry.date === startDate)?.weight;
    const endWeight = weights.find((entry) => entry.date === endDate)?.weight;

    if (startWeight === undefined || endWeight === undefined) {
      alert('Weight data is missing for one or both of the selected dates.');
      return;
    }

    setWeightDifference(endWeight - startWeight);
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h2>Welcome, {username}</h2>
        <form onSubmit={handleAddWeight}>
          <div className="mb-3">
            <label htmlFor="weight" className="form-label">
              Add Weight
            </label>
            <input
              type="number"
              className="form-control"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </form>

        <h3 className="mt-5">Calculate Weight Difference</h3>
        <div className="mb-3">
          <label htmlFor="startDate" className="form-label">Start Date</label>
          <input
            type="date"
            className="form-control"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="endDate" className="form-label">End Date</label>
          <input
            type="date"
            className="form-control"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" onClick={calculateWeightDifference}>
          Calculate
        </button>

        {weightDifference !== null && (
          <div className="mt-3">
            <h4>Weight Difference: {weightDifference} kg</h4>
          </div>
        )}

        <h3 className="mt-5">Weight History</h3>
        <ul className="list-group">
          {weights.map((entry, index) => (
            <li key={index} className="list-group-item">
              {entry.date}: {entry.weight} kg
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default checkAuth(Profile);