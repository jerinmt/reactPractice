import React, { useEffect, useState } from 'react';
import axios from 'axios';
import checkAuth from './components/checkAuth';
import Navbar from './components/Navbar';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function App() {
  const [list, setList] = useState([]);
  let user = useSelector(store => store.auth.user);
  const navigate = useNavigate();
  useEffect(() => {
    if(!user){
    navigate("/login");}
    getStudents();
  }, []);

  const getStudents = () => {    
    console.log(user);
    axios.get('https://worksheet-student.mashupstack.com/students', {
                headers: {'Authorization': "Bearer " + user.token }})
      .then(res => {
        setList(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <>
    <Navbar />
    <div className='container'>
      <h1>Student Management System</h1>
      <ul className='list-group'>
        {list.map(student => (
          <li key={student.id} className='list-group-item'>{student.name}-{student.age}</li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default checkAuth(App);