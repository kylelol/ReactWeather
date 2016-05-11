var React = require('react');
import Nav from './Nav'

var Main = React.createClass({
  render() {
    return (
      <div>
        <Nav></Nav>
        <h2>Main component</h2>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;
