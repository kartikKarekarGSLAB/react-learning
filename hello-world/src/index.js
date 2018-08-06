// import ClassName from 'ModuleName'
import React from 'react'; //import react  Class from react module.
import ReactDOM from 'react-dom'; // import react dom from react-dom module.
import 'bootstrap/dist/css/bootstrap.css';
import Header from './component/header'
var Student = {
	name : 'kartik karekar',
	age : 23
};
function AddElement(properties) {	
	return  <h1>Hello {properties.name} It's {properties.date.toLocaleTimeString()} </h1> ;
}
function SayHello() {
	return (
	<div>
		<AddElement name="kartik" date={new Date()}/>
		<AddElement name="nahush" date={new Date()} />
	</div>
	);
}

class Display extends React.Component {
	constructor(props) {
		super(props);
		this.state = {date : new Date()}
	}
	render() {
		return (<SayHello />);
	}
}
/*function test() {
	ReactDOM.render(<Display />,document.getElementById("root"));
}
setInterval(test,1000);*/

	ReactDOM.render(<Header />,document.getElementById("root"));