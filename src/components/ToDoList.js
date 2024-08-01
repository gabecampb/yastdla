import React, { useState } from 'react';
import ToDoItem from './ToDoItem.js';
import Button from './Button.js';
import './ToDoList.css';

export default function ToDoList() {
	const [items, setItems] = useState([
		{ id: 1, title: "Note 1", text: "Hello there" },
		{ id: 2, title: "Note 2", text: "Hello hi" }
	]);

	const removeNote = () => {
		const newItems = items.slice(0, -1);
		setItems(newItems);
	};

	const addNote = () => {
		const newItem = { id: items.length + 1, title: "Hello", text: "new text" };
		const newItems = [...items, newItem];
		setItems(newItems)
	};

	return (
		<div className="ToDoList">
			{
				items.map((item, idx) => (
					<ToDoItem title={items[idx].title} text={items[idx].text} />
				))
			}
			<Button clickFunc={addNote} text="Add note" />
			<Button clickFunc={removeNote} text="Remove note" />
		</div>
	);
}
