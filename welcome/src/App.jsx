import image from "./assets/images/Untitled.jpeg";
function App() {
  let username = "Jerin";
  console.log("React app started");
  return (
  <div className="container-fluid-sm bg-info vh-100">
    <div className="row">
      <div className="col">
        <h1 className="text-center display-2">Welcome to React Learning, {username}</h1>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <div className="card mx-auto p-2" style={{width:"220px", height:"300px"}}>
          <img className="mx-auto mt-1 img-fluid" src={image} alt="Card image 1" style={{width:"200px", height:"150px"}}/>
          <div className="card-body">
            <p className="card-text text-primary">First card with images and styles</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card mx-auto p-2" style={{width:"220px", height:"300px"}}>
          <img className="mx-auto mt-1 img-fluid" src="https://www.4cpl.tech/ast/uploads/2023/06/Web-Development.jpg" alt="Card image 2" style={{width:"200px", height:"150px"}}/>
          <div className="card-body">
            <p className="card-text text-primary">Second card with images and styles</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
export default App;