import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import QuestionsIndex from './QuestionsIndex';
import QuestionsShow from './QuestionsShow'

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={QuestionsIndex} />
      <Route path="/questions/:id" component={QuestionsShow} />
    </div>
  </Router>
);

export default App;
