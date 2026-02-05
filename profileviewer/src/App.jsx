import { useState, useEffect } from 'react';

function App(){
  const [username, setUsername] = useState('');
  useEffect( () =>{
    if(username=='Alice') {
      console.log("User changed to Alice");
    }
  }, [username]);
  
  const handleClick = () => {
    setUsername('Alice');
  };

    return (
  <div>
  <h1>Welcome {username==''?"guest":username}</h1>
  <button onClick={handleClick} >Login as Alice</button>
  </div>
);
}
export default App;