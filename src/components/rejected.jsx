'use-strict';

var React = require('react');

import {browserHistory} from 'react-router';

var Rejected = React.createClass({

  returnToBegin: function() {
    browserHistory.push('/begin')
  },

  componentDidMount: function() {
    setTimeout((function() {
      browserHistory.push('/begin');
    }), 3000);
  },

  render: function() {
    return(
      <div className="mainscreen">
        <div className="failure"><h1>Rejected</h1></div>
      </div>
    )
  }

 });

 module.exports = Rejected;
