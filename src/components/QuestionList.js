import React from 'react';

function QuestionListItem (props) {
  const {onClick = () => {}} = props;

  const handleClick = event => {
    event.preventDefault();
    onClick(props.id);
  }
  return (
    <div className='QuestionListItem'>
      <a href onClick={handleClick}>{props.title}</a>
    </div>
  )
}

function QuestionList (props) {
  const {data = [], onQuestionClick = () => {}} = props;

  return (
    <div className='QuestionList'>
      {
        data.map(
          (question) => (
            <QuestionListItem
              onClick={onQuestionClick}
              key={question.id}
              {...question} />
          )
        )
      }
    </div>
  );
}

export default QuestionList;
