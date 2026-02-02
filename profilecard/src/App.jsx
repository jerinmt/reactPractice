import image from "./assets/images/Untitled.jpeg";
function App() {
  let fullname = "Quentin Tarantino";
  let description = "One of the best directors in Hollywood";
  console.log("React app started");
  return (
  <div className="container-fluid-sm vh-100">
    <div className="row">
      <div className="col">
        <div className="card mx-auto" style={{width:"400px", border:"4px solid red", padding:"15px", backgroundColor:"hsl(30, 75%, 70%)"}}>
          <h2>{fullname}</h2>
          <img className="mx-auto mt-1 img-fluid" src={image} alt="Card image 1" style={{width:"150px"}}/>
          <div className="card-body">
            <p className="card-text text-info">{description}</p>
          </div>
          <img className="mx-auto mt-1 img-fluid" src="https://preview.redd.it/in-what-order-would-you-rank-quentin-tarantinos-movies-from-v0-wsmjrnud3gdf1.jpeg?auto=webp&s=d859199f10f2ba0c0d402f52647491df04758bd6" alt="List of movies" style={{width:"350px"}}/>
        </div>
      </div>
    </div>
  </div>
  );
}
export default App;