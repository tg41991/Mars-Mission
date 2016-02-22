'use-strict';

var React = require('react');
import {browserHistory} from 'react-router';

var Counter = React.createClass({

  getInitialState: function() {
    return{
      countdownSeconds: 60
    }
  },

  resetTimer: function() {
    clearInterval(this.interval);
    this.setState({ countdownSeconds: 60 });
    browserHistory.push('/rejected')
  },

  tick: function() {
    this.setState({countdownSeconds: this.state.countdownSeconds - 1});
    if (this.state.countdownSeconds <= 0) {
      this.resetTimer();
    }
  },

  start: function() {
    this.interval = setInterval(this.tick, 1000);
  },

  componentDidMount:function(nextProps) {
      this.start();
  },

  render: function() {
    return (
        <p>
          <span>{this.state.countdownSeconds >= 60 ? 1 : 0}</span>
          <span>:</span>
          <span>{this.state.countdownSeconds >= 10 ? "" : 0}</span>
          <span>{this.state.countdownSeconds >= 60 ? "00" : this.state.countdownSeconds}</span>
        </p>
    );
  }
});

module.exports = Counter;
