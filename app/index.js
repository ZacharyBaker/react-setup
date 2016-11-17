import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {
	render() {
		return (
			<div> Message: {this.props.message} </div>
		)
	}
}

ReactDOM.render(
	<HelloWorld  message="I'm a saucy message..."/>,
	document.getElementById('app')
);