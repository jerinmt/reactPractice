import React from 'react';

const TaskList = ({ tasks, message }) => {
  return (
    <div className="task-list">
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <p>{message}</p>
    </div>
  );
};

export default TaskList;