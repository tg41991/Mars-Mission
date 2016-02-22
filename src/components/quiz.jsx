'use-strict';

var React = require('react');

import {browserHistory} from 'react-router';
import Counter from './counter.jsx';
import Questions from './questions.jsx';


var questions = [
  {
    question: 'TRUE or FALSE: Olympus Mons is taller than Mt. Everest.',
    answer: 'true',
  },

  {
    question:'TRUE or FALSE: The average human can survive in the vacuum of space.',
    answer: 'true',
  },

  {
    question: 'TRUE or FALSE: Mars once had an atmosphere.',
    answer: 'true',
  },
];

var Quiz = React.createClass({

//sets first question when component loads
  getInitialState: function() {
    return {
      start: false,
      correctCount: 0,
      index: 0
    }
  },

  startTimer: function() {
    this.setState({start: true});
  },

  _handleAnswer: function() {
    if(correctCount === 3) {
      browserHistory.push('/accepted')
    } else {
      browserHistory.push('/rejected')
    }
  },

  render: function() {
    return(
      <div className="mainscreen">
        <div className="countdown"><Counter startTimer={true}/></div>
        <div className="quizwrap">
          <span>{questions[this.state.index].question}<Questions questions={this.state.index}/></span>
        </div>
      </div>
    )
  }
});


module.exports = Quiz;
