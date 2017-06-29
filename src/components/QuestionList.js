import React from 'react';
import {Link} from 'react-router-dom';

function QuestionListItem (props) {
  return (
    <div className='QuestionListItem'>
      <Link to={`/questions/${props.id}`}>{props.title}</Link>
    </div>
  )
}

function QuestionList (props) {
  const {data = []} = props;

  return (
    <div className='QuestionList'>
      {
        data.map(
          (question) => (
            <QuestionListItem
              key={question.id}
              {...question} />
          )
        )
      }
    </div>
  );
}

export default QuestionList;
