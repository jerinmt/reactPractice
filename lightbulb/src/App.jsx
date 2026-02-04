import React, { useState } from 'react';
import Child from './Child';

function App() {
  const [bulb, setBulb] = useState(false);
  function bulbSwitch() {
    setBulb(!bulb);
  }
  return (
    <div className={bulb?"container-fluid vh-100 bg-light text-dark":"container-fluid vh-100 bg-dark text-light"}>
      <h1>{bulb?"The room is bright":"The room is dark"} </h1>
      <Child bulbSwitch={bulbSwitch} currentState={bulb}/>
    </div>
  );
}

export default App;