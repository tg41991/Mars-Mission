'use-strict';

var React = require('react');

var Rejected = React.createClass({

  returnToBegin: function() {
    browserHistory.push('/begin')
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
