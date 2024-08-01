import React from 'react';

export default function ToDoItem(props) {
	return (
		<React.Fragment>
			<h1>{props.title}</h1>
			<p>{props.text}</p>
		</React.Fragment>
	);
}
