import React, {Component} from 'react';
import {getQuestion} from '../utilities/requests';

class QuestionsShow extends Component {
  constructor (props) {
    super(props);

    this.state = {
      question: {}
    };
  }

  componentDidMount () {
    getQuestion(this.props.id)
      .then(question => {
        this.setState({question});
      })
  }

  render () {
    const {question} = this.state;

    return (
      <div className="QuestionsShow">
        <h2>{question.title}</h2>
        <p>{question.body}</p>
        <p><strong>Author:</strong> {question.author_full_name}</p>
      </div>
    )
  }
}

export default QuestionsShow;
