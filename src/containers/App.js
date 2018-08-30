import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.scss';
import Hello from '../components/Hello';

class App extends Component {
	render() {
		return (
			<div>
				<h1>My React App!</h1>
				<Hello hello={'Hello World!'} />
			</div>
		);
	}
}

export default hot(module)(App);
