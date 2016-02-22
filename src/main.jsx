'use-strict';

var React = require('react');
var ReactDOM = require('react-dom');
import {Router, Route, browserHistory, Redirect} from 'react-router';


//components
import Welcome from './components/welcome.jsx';
import Begin from './components/begin.jsx';
import Counter from './components/counter.jsx';
import Quiz from './components/quiz.jsx';
import Questions from './components/questions.jsx';
import Accepted from './components/accepted.jsx';
import Rejected from './components/rejected.jsx';
import NotFound from './components/404.jsx';

var App = React.createClass({
  render: function() {
    return (
      <Router history={browserHistory}>
        <Route path='/welcome' component={Welcome}/>
        <Redirect from="/" to='/welcome'/>
        <Route path='/begin' component={Begin}/>
        <Route path='/counter' component={Counter} />
        <Route path='/quiz' component={Quiz}/>
        <Route path='/questions' components={Questions}/>
        <Route path='/accepted' component={Accepted}/>
        <Route path='/rejected' component={Rejected}/>
        <Route path='*' component={NotFound} />
      </Router>

    );
  }
});

ReactDOM.render(<App />, document.querySelector('.mount-node'));
