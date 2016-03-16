'use-strict';

var React = require('react');

var Questions = React.createClass({

  //checks if the answer values match those in the array, and switches to the next question
    _handleEvaluateAnswer: function() {
      var userAnswer = this.refs.answer.value;
      var rightAnswer = this.props.rightAnswer;

      if (rightAnswer === userAnswer) {
        this.props.onAnswer(true)
      } else {
        this.props.onAnswer(false)
      }
      this.refs.answer.value = '';
    },

  render: function() {
    return (
      <div>
        <input ref="answer" type="text" className="answerfield"></input>
        <button className="submit" onClick={this._handleEvaluateAnswer}>Submit</button>
      </div>
    )
  }
});


module.exports = Questions;
