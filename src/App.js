
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CollegeList from './CollegeList';
import CollegeDetails from './CollegeDetails';
import AddStudent from './AddStudent';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={CollegeList} />
        <Route exact path="/college/:collegeId" component={CollegeDetails} />
        <Route exact path="/college/:collegeId/add-student" component={AddStudent} />
      </Switch>
    </Router>
  );
}

export default App;
