import React, { Component } from 'react';
import QuestionsIndex from './QuestionsIndex';
import QuestionsShow from './QuestionsShow';


// To test the function in the browser, we make
// a global variable. This is temporary.
// window.getQuestions = getQuestions;

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      questionId: null
    };

    this.goToQuestion = this.goToQuestion.bind(this);
  }

  goToQuestion (id) {
    this.setState({questionId: id});
  }

  render() {
    return (
      <div className="App">
        <h1>Awesome Answers</h1>
        { this.state.questionId !== null
          ? <QuestionsShow id={this.state.questionId} />
          : <QuestionsIndex onQuestionClick={this.goToQuestion} />
        }
      </div>
    );
  }
}

export default App;
