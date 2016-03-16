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

  {
    question: '',
    answer: '',
  }
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

  componentDidUpdate() {
    if(this.state.correctCount === 3) {
      browserHistory.push('/accepted')
    }; if (this.state.index > 2 && this.state.correctCount != 3) {
      browserHistory.push('/rejected')
    };
  },

  startTimer: function() {
    this.setState({start: true});
  },

  _handleAnswer: function(isRight) {
    if(isRight) {
      this.setState({
        correctCount: this.state.correctCount + 1,
        index: this.state.index + 1
      });
   } else {
     this.setState({
      index: this.state.index + 1
     });
   }
  },

  render: function() {
    return(
      <div className="mainscreen">
        <div className="countdown"><Counter startTimer={true}/></div>
        <div className="quizwrap">
          <span>{questions[this.state.index].question}<Questions correctCount={this.state.correctCount} questions={this.state.index} onAnswer={this._handleAnswer} rightAnswer={questions[this.state.index].answer}/></span>
        </div>
      </div>
    )
  }
});


module.exports = Quiz;
