'use-strict';

var React = require('react');
import {browserHistory} from 'react-router';

var Counter = React.createClass({

  getInitialState: function() {
    return{
      countdownSeconds: 60
    }
  },

  handleTimeout: function() {
    browserHistory.push('/rejected')
  },

  tick: function() {
    this.setState({countdownSeconds: this.state.countdownSeconds - 1});
    if (this.state.countdownSeconds <= 0) {
      this.handleTimeout();
    }
  },

  start: function() {
    this.interval = setInterval(this.tick, 1000);
  },

  componentDidMount:function(nextProps) {
      this.start();
  },

  componentWillUnmount: function() {
    clearInterval(this.interval);
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
