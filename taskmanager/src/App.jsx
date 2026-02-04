import React, { useState } from 'react';
import TaskList from './TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [message, setMessage] = useState('');
  const [taskName, setTaskName] = useState('');

  const handleAddTask = () => {
    if (taskName.trim() === '') return;

    setTasks([...tasks, taskName]);//add new task to list by rest operator
    setMessage(`Task added: ${taskName}!`);
    setTaskName('');
    document.body.style.backgroundColor = 'lightblue';
  };

  return (
    <div className="container mt-5">
      <h1 className='text-dark'>Task Manager</h1>
      <div className="card p-4 mb-4">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter task name"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>
        <button className="btn btn-primary mt-2" onClick={handleAddTask}>
          Add Task
        </button>
      </div>
      <TaskList tasks={tasks} message={message || 'Add a task to get started!'} />
    </div>
  );
}

export default App;