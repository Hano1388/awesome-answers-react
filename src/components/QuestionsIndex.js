import React, {Component} from 'react';
import QuestionList from './QuestionList';
import {getQuestions} from '../utilities/requests';

class QuestionsIndex extends Component {
  constructor (props) {
    super(props);

    this.state = {
      questions: []
    };
  }

  componentDidMount () {
    getQuestions()
      .then(questions => {
        this.setState({questions});
      });
  }

  render() {
    return (
      <div className='QuestionsIndex'>
        <h2>Questions</h2>
        <QuestionList
          onQuestionClick={this.props.onQuestionClick}
          data={this.state.questions} />
      </div>
    );
  }
}

export default QuestionsIndex;
