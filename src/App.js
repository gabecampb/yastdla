import React from 'react';
import ToDoList from './components/ToDoList.js';
import './App.css';

export default function App() {
	return (
		<React.Fragment>
			<p>YASTDLA (Yet Another Shitty To-Do List App)</p>
			<ToDoList />
		</React.Fragment>
	);
}
