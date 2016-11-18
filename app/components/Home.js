import React from 'react';
import reactCSS from 'reactcss';

export default class Home extends React.Component {

	render () {
		const styles = reactCSS({
			'default': {
				title: {
					fontSize: '20px',
					color: 'green'
				}
			}
		})
		return (
			<div>
				<h1 style={ styles.title }>HOMIES</h1>
			</div>
		)
	}
}

module.exports = Home;