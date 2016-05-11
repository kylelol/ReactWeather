var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
import Weather from './components/Weather'
import About from './components/About'
import Examples from './components/Examples'

require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="examples" component={Examples} />
      <Route path="about" component={About}/>
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
