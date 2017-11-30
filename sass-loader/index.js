import '../css/estilos.css'
import {firstMessage, delayedMessage } from './message.js';
import platziImg from '../images/platzi.png';
import data from './teachers.json';
import renderToDom from './render-to-dom.js';
import '../../css/teachers.scss';

import React  {Component} from 'react';
import { render } from 'react-dom';

function Teacher() {
	return (
		<li className="Teacher">
			{props.name}
			<a href="https://twitter.com/"></a>
			{props.twitter}
		</li>
	)
}

render(<Teachers />, document.getElementById('container'))

class Teachers extends  Component {
	render() {
		return (
			<ul className="Teachers">
				{this.props.data.teachers.map(()=>{
					return <Teacher />	
				})
				}
			</ul>
		)
	}
}



console.log(data)

data.teachers.forEach((teacher)=>{
	const element = document.createElement('li');
	element.textContent = teacher.name;
	renderToDom(element);
});

document.write(firstMessage);
delayedMessage();

const img = document.createElement('img');
img.setAttribute('src', platziImg);
img.setAttribute('width', 50);
img.setAttribute('height', 50);
document.body.append(img);
//console.log('Hola mundo, desde Webpack');
console.log('Hola mundo!, desde Webpack con otro archivo')