import React, { useState } from "react";

function App() {
  const [students, setStudents] = useState([]);
  const [tempStudents, setTempStudents] = useState([]);

  const [studentName, setStudentName] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [classLevel, setClassLevel] = useState("");

  const [editingStudentId, setEditingStudentId] = useState(null);
  const [editedStudentName, setEditedStudentName] = useState("");
  const [editedStudentRollNumber, setEditedStudentRollNumber] = useState("");
  const [editedStudentClassLevel, setEditedStudentClassLevel] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleNameInputChange = (event) => {
    setStudentName(event.target.value);
  };
  const handleRollNumberInputChange = (event) => {
    setRollNumber(event.target.value);
  };
  const handleClassLevelInputChange = (event) => {
    setClassLevel(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let x = students.length + 1;
    if (studentName.trim() === "" || rollNumber.trim() === "" || classLevel.trim() === "") {
      alert("Please fill in all fields.");
      return;
    }
    if(students.some((student) => student.rollNumber === rollNumber)) {
      alert("Roll number already exists for another student. Please choose a different roll number.");
      return;
    }
    let newStudent = {
      id: x,
      name: studentName,
      rollNumber: rollNumber,
      classLevel: classLevel
    };
    setStudents([...students, newStudent]);
    setStudentName(" ");
    setRollNumber(" ");
    setClassLevel(" ");
  };

  const handleEditStudent = (student) => {
    setEditingStudentId(student.id);
    setEditedStudentName(student.name);
    setEditedStudentRollNumber(student.rollNumber);
    setEditedStudentClassLevel(student.classLevel);
  };

  const handleSaveStudent = () => {
    if (editedStudentName.trim() !== "" && editedStudentRollNumber.trim() !== "" && editedStudentClassLevel.trim() !== "") {
      if (students.some((student) => student.rollNumber === editedStudentRollNumber && student.id !== editingStudentId)) {
        alert("Roll number already exists for another student. Please choose a different roll number.");
        return;
      }
      const updatedStudents = students.map((student) => {
        if (student.id === editingStudentId) {
          return { ...student, name: editedStudentName, rollNumber: editedStudentRollNumber, classLevel: editedStudentClassLevel };
        }
        return student;
      });
      setStudents(updatedStudents);
      setEditingStudentId(null);
    } else {
      alert("Please fill in all fields.");
    }
  };

  const handleCancelEdit = () => {
    setEditingStudentId(null);
    setEditedStudentName("");
  };


  const handleDeleteStudent = (studentId) => {
    const updatedStudents = students.filter((student) => student.id !== studentId);
    setStudents(updatedStudents);
  };


  const handleSearch = (event) => {
    event.preventDefault();
    setTempStudents(students);
    const filteredStudents = students.filter((student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) || student.classLevel.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setStudents(filteredStudents);
  };

  const handleResetSearch = () => {
    setSearchTerm("");
    setStudents(tempStudents);
  };

  return (
    <div className="container-fluid bg-info vh-100 p-5">
      <div className="row mb-4">
        <div className="col">
          <form onSubmit={handleSearch}>
            <label>Search Name:
              <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />&nbsp;
            </label>
            <button className="btn btn-small btn-success" type="submit">Search</button>&nbsp;
          </form>
        </div>
      </div>
      <div className="row h-25 mb-4" >
        <div className="col">
          <h2>Create new record</h2>
          <form onSubmit={handleSubmit}>
            <label>Student's name
              <input type="text" value={studentName} onChange={handleNameInputChange} />
            </label>
            <label>RollNumber
              <input type="number" value={rollNumber} onChange={handleRollNumberInputChange} />
            </label>
            <label>Class
              <input type="text" value={classLevel} onChange={handleClassLevelInputChange} />
            </label>
            <button className="btn btn-small btn-success" type="submit">Add Student</button>
          </form>
        </div>
      </div>
      <div className="row h-50">
        <div className="col">
          <button className="btn btn-success" onClick={handleResetSearch}>All students</button>
          <table className="table table-bordered table-dark">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>RollNumber</th>
                <th>Class</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {(students.length === 0) ? (
                <tr>
                  <td colSpan="5" className="text-center">No students found</td>
                </tr>
              ) :
                students.map((student) => (
                  <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>
                      {editingStudentId === student.id ? (
                        <input
                          type="text"
                          value={editedStudentName}
                          onChange={(e) => setEditedStudentName(e.target.value)}
                        />
                      ) : (
                        student.name
                      )}
                    </td>
                    <td>
                      {editingStudentId === student.id ? (
                        <input
                          type="number"
                          value={editedStudentRollNumber}
                          onChange={(e) => setEditedStudentRollNumber(e.target.value)}
                        />
                      ) : (
                        student.rollNumber
                      )}
                    </td>
                    <td>
                      {editingStudentId === student.id ? (
                        <input
                          type="text"
                          value={editedStudentClassLevel}
                          onChange={(e) => setEditedStudentClassLevel(e.target.value)}
                        />
                      ) : (
                        student.classLevel
                      )}
                    </td>
                    <td>
                      {editingStudentId === student.id ? (
                        <>
                          <button
                            className="btn btn-primary mr-2"
                            onClick={handleSaveStudent}
                          >
                            Save
                          </button>
                          <button
                            className="btn btn-secondary"
                            onClick={handleCancelEdit}
                          >
                            Cancel
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            className="btn btn-primary mr-2"
                            onClick={() => handleEditStudent(student)}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-danger"
                            onClick={() => handleDeleteStudent(student.id)}
                          >
                            Delete
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

export default App;