'use-strict';

var React = require('react');
import {browserHistory} from 'react-router';

var Welcome = React.createClass({

  _handleshowBegin: function() {
    browserHistory.push('/begin')

  },

  render: function() {
    return (
        <div className="mainscreen">
          <button className="taketest" onClick={this._handleshowBegin}>Take Test</button>
        </div>
    )
  }
});

module.exports = Welcome;
