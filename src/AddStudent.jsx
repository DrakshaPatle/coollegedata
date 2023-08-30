import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const studentsData = {};

function AddStudent() {
  const { collegeId } = useParams();
  const navigate = useNavigate();
  const [studentName, setStudentName] = useState("");

  const handleStudentNameChange = (event) => {
    setStudentName(event.target.value);
  };

  const handleSave = () => {
    const newStudent = { id: Date.now(), name: studentName };
    studentsData[collegeId] = [...(studentsData[collegeId] || []), newStudent];
    setStudentName("");

    navigate(`/college/${collegeId}`);
  };

  const handleCancel = () => {
    navigate(`/college/${collegeId}`);
  };

  return (
    <div>
      <h2>Add Student to College {collegeId}</h2>
      <label>
        Student Name:
        <input
          type="text"
          value={studentName}
          onChange={handleStudentNameChange}
        />
      </label>
      <button onClick={handleSave}>Save</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
}

export default AddStudent;
