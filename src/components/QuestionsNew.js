import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {postQuestion} from '../utilities/requests';

class QuestionsNew extends Component {
  state = {
    id: null
  }

  // Added as a feature in ES7, we can create instance variables
  // (properties of this) in a class by using the following
  // syntax
  createQuestion = data => {
    postQuestion(data)
      .then(({id}) => {
        this.setState({id})
      });
  }

  render () {
    const {id} = this.state;
    return (
      <div className="QuestionsNew">
        {id && <Redirect to={`/questions/${id}`} />}
        <h1>New Question</h1>
        <QuestionForm onSubmit={this.createQuestion} />
      </div>
    );
  }
}

function QuestionForm (props) {
  const {onSubmit = () => {}} = props;

  const handleSubmit = event => {
    event.preventDefault();
    const {currentTarget: form} = event;

    const fData = new FormData(form);

    onSubmit({
      title: fData.get('title'),
      body: fData.get('body')
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='title'>Title</label>
        <input id='title' name='title' />
      </div>

      <div>
        <label htmlFor='body'>Body</label>
        <input id='body' name='body' />
      </div>

      <div>
        <input type='submit' value='Submit'/>
      </div>
    </form>
  );
}

export default QuestionsNew;
