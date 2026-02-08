import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const students = ["Akhil", "Archana", "Deepu", "Jerin", "Karthika", "Sahad", "Vignesh", "Vivek"];

  const handleRedirect = () => {
    navigate("/student/Riya");
  };

  return (
    <div>
      <h1>Student List</h1>
      <ul>
        {students.map((student) => (
          <li key={student}>
            <a href={`/student/${student}`}>{student}</a>
          </li>
        ))}
      </ul>
      <button onClick={handleRedirect}>Go to Jerin's Page</button>
    </div>
  );
}

export default App;