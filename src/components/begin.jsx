'use-strict';

var React = require('react');
import {browserHistory} from 'react-router';

var Begin = React.createClass({

  _handlestartTest: function() {
      browserHistory.push('/quiz')
  },

  render: function() {
    return (
        <div className="mainscreen">
          <button className="taketest" onClick={this._handlestartTest}>Begin Evaluation</button>
          <div className="countdown hidden"></div>
        </div>
    )
  }
});

module.exports = Begin;
