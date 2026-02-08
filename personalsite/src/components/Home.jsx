import React from 'react';

const Home = () => {
  const handleClick = () => {
    document.getElementById('message').innerText = 'Hello from React! I love this page!';
    document.getElementById('heading').style.backgroundColor = 'lightblue';
  };

  return (
    <div className="card p-4 mb-4">
      <h1 id="heading">This is the Home Page</h1>
      <p id="message">Click the button to see my enthusiasm!</p>
      <button className="btn btn-primary" onClick={handleClick}>Show Enthusiasm</button>
    </div>
  );
};

export default Home;