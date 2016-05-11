import React from 'react'
import {Link, IndexLink} from 'react-router'

class Nav extends React.Component {
  render() {
    return (
      <div>
        <h3>Nav Component</h3>
        <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
        <Link to="/about">About</Link>
        <Link to="/examples">Examples</Link>
      </div>
    )
  }
}

export default Nav;
