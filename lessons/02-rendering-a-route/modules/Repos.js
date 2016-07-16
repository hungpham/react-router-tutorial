import React from 'react';
import { Link } from 'react-router';
import NavLink from './NavLink';

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },
  handleSubmit(event) {
    event.preventDefault();
    const username = event.target.elements[0].value;
    const repo = event.target.elements[1].value;
    const path = `/repos/${username}/${repo}`;
    
    this.context.router.push(path);
    
    return false;
  },

  render() {
    return (
    	<div>
    		<h2>Repos</h2>
    		<p>List of repos</p>
    		<ul>
          <li><NavLink to="/repos/reactjs/react-router">reactjs React Router</NavLink></li>
          <li><NavLink to="/repos/facebook/react">facebook React</NavLink></li>
          <li>
            <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="username"/> / { ' ' }
              <input type="text" placeholder="repo"/> / { ' ' }
              <button type="submit">Go</button>
            </form>
          </li>
        </ul>
        
        {this.props.children}
  		</div>
    );
  }
})
