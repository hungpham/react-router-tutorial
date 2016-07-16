import React from 'react';

import NavLink from './NavLink';
import HomePage from './HomePage';

export default React.createClass({
  render() {
    return (
    	<div>
        <header>React Router Tutorial</header>
        <ul role="nav">
          <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos" >Repos</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
})
