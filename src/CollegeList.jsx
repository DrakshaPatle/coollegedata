import React from 'react';
import { Link } from 'react-router-dom';

const colleges = [
  { id: 1, name: 'College A' },
  { id: 2, name: 'College B' },
 
];

function CollegeList() {
  return (
    <div>
      <h2>Colleges List</h2>
      <ul>
        {colleges.map(college => (
          <li key={college.id}>
            <Link to={`/college/${college.id}`}>{college.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CollegeList;
