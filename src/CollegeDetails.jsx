import React from 'react';
import { useParams, Link } from 'react-router-dom';

const studentsData = {
  1: [
    { id: 1, name: 'Student A' },
    { id: 2, name: 'Student B' },
  ],
  2: [
    { id: 1, name: 'Student X' },
    { id: 2, name: 'Student Y' },
  ],
  
};

function CollegeDetails() {
  const { collegeId } = useParams();
  const students = studentsData[collegeId] || [];

  return (
    <div>
      <h2>Students of College {collegeId}</h2>
      <ul>
        {students.map(student => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>
      <Link to={`/college/${collegeId}/add-student`}>Add Student</Link>
    </div>
  );
}

export default CollegeDetails;
