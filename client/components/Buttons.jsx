import React from 'react';

const Add = (props) => (
	<button
		id="incrementCount"
		onClick={() => props.incrementCount(props.itemKey)}
	>
		Add
	</button>
);

const Delete = (props) => (
	<button
		id="decrementCount"
		onClick={() => props.decrementCount(props.itemKey)}
	>
		Delete
	</button>
);

export { Add, Delete };
