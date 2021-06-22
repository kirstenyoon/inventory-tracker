import React from 'react';

const TotalsDisplay = (props) => {
	return (
		<div className="innerbox" id="totals">
			<label htmlFor="totalInventory">Item Types: </label>
			<span id="totalInventory">{props.totalInventory}</span>
			<p>
				<label htmlFor="totalItems">Total Items: </label>
				<span id="totalItems">{props.totalItems}</span>
			</p>
		</div>
	);
};
export default TotalsDisplay;
