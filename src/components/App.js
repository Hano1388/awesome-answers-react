import React, { Component } from 'react';
import QuestionsIndex from './QuestionsIndex';

// To test the function in the browser, we make
// a global variable. This is temporary.
// window.getQuestions = getQuestions;

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Awesome Answers</h1>
        <QuestionsIndex />
      </div>
    );
  }
}

export default App;
