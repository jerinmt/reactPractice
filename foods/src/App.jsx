function handleClick(item) {
  document.getElementById('message').innerHTML= "I love " + item;
}

function App() {
  const foodList = ["Biriyani", "Porotta & Beef", "Irachi puttu", "Pathiri & Mutton"];

  return (
    <div className="container bg-secondary">
        <div className="row">
          <div className="col mx-auto">
            <h1 className="text-warning">Favourite foods</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <ul>
              {foodList.map((item)=>{return <li>{item} <button type="button" className="btn btn-primary" onClick={()=>{handleClick(item)}}>Select</button></li>})}
            </ul>
            <p id="message">Select a food that you love!</p>
          </div>
        </div>
    </div>
  );
}
export default App;