import React from 'react';

function QuestionListItem (props) {
  return (
    <div className='QuestionListItem'>
      {props.title}
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
            <QuestionListItem key={question.id} {...question} />
          )
        )
      }
    </div>
  );
}

export default QuestionList;
