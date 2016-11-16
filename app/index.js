// var React = require('react');
// var ReactDOM = require('react-dom');

import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {
	render() {
		return (
			<div> Hallo Warld </div>
		)
	}
}

ReactDOM.render(
	<HelloWorld />,
	document.getElementById('app')
);