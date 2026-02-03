import image from "./assets/react.svg"

function handleClick() {
    document.getElementById('message').innerHTML = "Hello from React! I love my hobbies!";
    document.getElementsByTagName('h1')[0].style.color = "red";
}

function App() {
  const hobbiesOne = ["Reading", "Writing short story","Shortfilm making"];
  const hobbiesTwo = ["football", "travel", "gaming"];
  const hobbiesTwoList = [ ];
  const profile = {
    name: "Jerin Moni Thomas",
    age: 33,
    student: false
  };
  for( let i=0; i < hobbiesTwo.length; i++) {
    hobbiesTwoList.push(<li key ={i}> {hobbiesTwo[i]} </li> );
  }

  return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Hobbies</h1>
                    <div className="card mx-auto" style={{width:"400px", border:"4px dashed red", padding:"10px", backgroundColor:"hsl(80, 75%, 70%)"}}>
                        <h2>Name: {profile.name}</h2>
                        <p>Age: {profile.age}</p>
                        <p>Student: {profile.student.toString()}</p>
                        <img className="mx-auto mt-1 img-fluid" src={image} alt="Card image 1" style={{width:"150px"}}/>
                        <div className="card-body">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <ul>
                                            {hobbiesOne.map((item)=>{return <li>{item}</li>})}
                                        </ul>
                                    </div>
                                    <div className="col">
                                        <ul>{hobbiesTwoList}</ul>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button type="button" className="btn btn-info" onClick={handleClick}>Show enthusiasm</button>
                    <p id="message">Click the button to see my enthusiasm!</p>
                </div>
            </div>
        </div>
  );
}
export default App;