/* eslint-disable indent */
import React from 'react';

const ItemInput = (props) => (
	<div className="displayBox" id="newItem">
		<h4>Add New Item</h4>
		<div>
			<label htmlFor="item" id="itemType">
				{' '}
				Item Type:{' '}
			</label>
			<input type="text" id="itemInput" value={props.inputName}></input>
			<button
				onClick={() => {
					props.addNewItem(document.getElementById('itemInput').value);
					props.addItem();
					document.getElementById('itemInput').value = '';
				}}
			>
				Add Item
			</button>
		</div>
	</div>
);

export default ItemInput;
