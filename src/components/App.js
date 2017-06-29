import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import QuestionsIndex from './QuestionsIndex';
import QuestionsShow from './QuestionsShow';
import QuestionsNew from './QuestionsNew';

const App = () => (
  <Router>
    <div className="App">
      <nav>
        <Link to='/'>Home</Link> |
        <Link to='/questions'>Questions</Link> |
        <Link to='/questions/new'>New Question</Link>
      </nav>
      <hr />

      <Switch>
        <Route exact path="/" component={QuestionsIndex} />
        <Route exact path="/questions" component={QuestionsIndex} />
        <Route path="/questions/new" component={QuestionsNew} />
        <Route path="/questions/:id" component={QuestionsShow} />
      </Switch>
    </div>
  </Router>
);

export default App;
