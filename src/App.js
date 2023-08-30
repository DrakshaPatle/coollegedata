

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CollegeList from './CollegeList';
import CollegeDetails from './CollegeDetails';
import AddStudent from './AddStudent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CollegeList />} />
        <Route path="/college/:collegeId" element={<CollegeDetails />} />
        <Route path="/college/:collegeId/add-student" element={<AddStudent />} />
      </Routes>
    </Router>
  );
}

export default App;
