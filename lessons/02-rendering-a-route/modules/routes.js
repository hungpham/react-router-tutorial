import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import HomePage from './HomePage';
import About from './About';
import Repos from './Repos';
import Repo from './Repo';

module.exports = (
	
  	<Route path="/" component={App}>
      <IndexRoute component={HomePage}/>
  		<Route path="/about" component={About}></Route>
  		<Route path="/repos" component={Repos}>
  			<Route path="/repos/:userName/:repoName" component={Repo}/>
  		</Route>
  		
  	</Route>
);