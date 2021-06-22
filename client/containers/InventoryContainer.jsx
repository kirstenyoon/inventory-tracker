import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import ItemInput from '../components/ItemInput.jsx';
import ItemsDisplay from '../components/ItemsDisplay.jsx';

const mapStateToProps = (state) => ({
	inventoryList: state.inventory.inventoryList,
	totalItems: state.inventory.totalItems,
	totalInventory: state.inventory.totalInventory,
	lastItemId: state.inventory.lastItemId,
	newItem: state.inventory.newItem,
});

const mapDispatchToProps = (dispatch) => ({
	addNewItem: (item) => dispatch({ type: 'ADD_NEW_ITEM', payload: item }),
	addItem: () => dispatch({ type: 'ADD_ITEM' }),
	incrementCount: (itemKey) =>
		dispatch({ type: 'INCREMENT_COUNT', payload: itemKey }),
	decrementCount: (itemKey) =>
		dispatch({ type: 'DECREMENT_COUNT', payload: itemKey }),
});

class InventoryContainer extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="innerbox">
				{/* add addNewItem and addItem property to ItemInput */}
				<ItemInput
					addNewItem={this.props.addNewItem}
					addItem={this.props.addItem}
				/>
				<ItemsDisplay
					inventoryList={this.props.inventoryList}
					totalItems={this.props.totalItems}
					incrementCount={this.props.incrementCount}
					decrementCount={this.props.decrementCount}
				/>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(InventoryContainer);
