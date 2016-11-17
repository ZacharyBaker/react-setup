import React from 'react';
import ReactRouter from 'react-router';
import {Router} from 'react-router';
import {Route} from 'react-router';
import {IndexRoute} from 'react-router';

var Main = require('../components/Main');
var Home = require('../components/Home');

var routes = (
	<Router>
		<Route path='/' component={Main}>
			<Route path='/home' component={Home} />
		</Route>
	</Router>
);

module.exports = routes;