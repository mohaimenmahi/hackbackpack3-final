import React, { Component } from 'react';
import Router from './Router';

class Home extends Component {
	render() {
		return (
			<div>
				<Router />
				<h1>Welcome To The Classroom!</h1>
				<h4>Classroom Materials and Schedules all are there!</h4>
			</div>
		);
	}
}

export default Home;
