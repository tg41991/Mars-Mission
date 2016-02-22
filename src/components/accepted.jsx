'use-strict';

var React = require('react');

var Accepted = React.createClass({

  returnToBegin: function() {
    browserHistory.push('/begin')
  },

  render: function() {
    return(
      <div className="mainscreen">
        <div className="success"><h1>Accepted</h1></div>
      </div>
    )
  }

 });

 module.exports = Accepted;
