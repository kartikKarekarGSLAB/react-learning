import React , { Component } from 'react';
import './header.css';

class Header extends Component {
	state = {
		counter : 0,
		level : 10
	}
	style = {
		fontSize: 100,
		fontWeight:'bolder'
	}
	render() {
		return (
			<React.Fragment>
			<h1 id="test-header">Hello Kartik GS-1830</h1>
			<span style={this.style} >{this.formatCounter()}</span>
			<br />
			<button className="btn btn-lg btn-info" onClick={this.handlerForGreet}>Say Hello</button>
			</React.Fragment>);
	};
	formatCounter() {
		const { level } = this.state;
		return level === 0 ? <h5>zero level</h5> : level;
	}
	handlerForGreet(event) {
		event.preventDefault();
		alert('Hello kartik'+event.shiftKey);
	}
}

export default Header;