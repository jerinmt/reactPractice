import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import checkAuth from '../utils/checkAuth';
import Navbar from './Navbar';
import Footer from './Footer';
import EditModal from './EditModal';
import DeleteModal from './DeleteModal';

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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentWeights = weights.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(weights.length / itemsPerPage);

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

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const [editModalVisible, setEditModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [editedWeight, setEditedWeight] = useState('');

  const handleEditClick = (entry) => {
    setSelectedEntry(entry);
    setEditedWeight(entry.weight);
    setEditModalVisible(true);
  };

  const handleDeleteClick = (entry) => {
    setSelectedEntry(entry);
    setDeleteModalVisible(true);
  };

  const handleEditSave = () => {
    const updatedWeights = weights.map((entry) =>
      entry.date === selectedEntry.date && entry.username === selectedEntry.username
        ? { ...entry, weight: editedWeight }
        : entry
    );
    setWeights(updatedWeights);
    localStorage.setItem('weights', JSON.stringify(updatedWeights));
    setEditModalVisible(false);
    setSelectedEntry(null);
  };

  const handleDeleteConfirm = () => {
    const updatedWeights = weights.filter(
      (entry) => !(entry.date === selectedEntry.date && entry.username === selectedEntry.username)
    );
    setWeights(updatedWeights);
    localStorage.setItem('weights', JSON.stringify(updatedWeights));
    setDeleteModalVisible(false);
    setSelectedEntry(null);
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-secondary">
      <Navbar />
      <div className="container-fluid flex-grow-1 py-4">
        <h2 className="text-center mb-4">Welcome, {username}</h2>
        <div className="row mb-4">
          <div className="col-md-6">
            <form onSubmit={handleAddWeight}>
              <h3>Add Weight</h3>
              <div className="mb-3">
                <label htmlFor="weight" className="form-label">Weight</label>
                <input
                  type="number"
                  id="weight"
                  className="form-control"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">Add</button>
            </form>
          </div>
          <div className="col-md-6">
            <h3>Calculate Weight Difference</h3>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="startDate" className="form-label">Start Date</label>
                <input
                  type="date"
                  id="startDate"
                  className="form-control"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>
              <div className="col">
                <label htmlFor="endDate" className="form-label">End Date</label>
                <input
                  type="date"
                  id="endDate"
                  className="form-control"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
            </div>
            <button className="btn btn-success" onClick={calculateWeightDifference}>Calculate</button>
            {weightDifference !== null && (
              <div className="alert alert-info mt-3">
                <h4>Weight Difference: {weightDifference} kg</h4>
              </div>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h3>Weight History</h3>
            <ul className="list-group mb-4">
              {currentWeights.map((entry, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                  <span>
                    {entry.date}: {entry.weight} kg
                  </span>
                  <div>
                    <button className="btn btn-warning btn-sm me-2" onClick={() => handleEditClick(entry)}>Edit</button>
                    <button className="btn btn-danger btn-sm" onClick={() => handleDeleteClick(entry)}>Delete</button>
                  </div>
                </li>
              ))}
            </ul>
            <nav>
              <ul className="pagination justify-content-center">
                {Array.from({ length: totalPages }, (_, index) => (
                  <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                    <button className="page-link" onClick={() => handlePageChange(index + 1)}>
                      {index + 1}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <Footer />

      <EditModal
        visible={editModalVisible}
        weight={editedWeight}
        onClose={() => setEditModalVisible(false)}
        onSave={handleEditSave}
        onWeightChange={(e) => setEditedWeight(e.target.value)}
      />

      <DeleteModal
        visible={deleteModalVisible}
        onClose={() => setDeleteModalVisible(false)}
        onConfirm={handleDeleteConfirm}
      />
    </div>
  );
};

export default checkAuth(Profile);

