import React from 'react';

export default class Main extends React.Component {
	render () {
		return (
			<div>
				Main Thang
				{this.props.children}
			</div>
		)
	}
}

module.exports = Main;