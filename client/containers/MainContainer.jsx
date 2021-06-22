import React, { Component } from 'react';
import { connect } from 'react-redux';
import TotalsDisplay from '../components/TotalsDisplay.jsx';
import InventoryContainer from './InventoryContainer.jsx';

const mapStateToProps = (state) => ({
	totalItems: state.inventory.totalItems,
	totalInventory: state.inventory.totalInventory,
});

const mapDispatchToProps = (dispatch) => ({});

class MainContainer extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container">
				<div className="outerBox">
					<h1 id="header">Inventory Tracker</h1>
					<div>
						<TotalsDisplay
							totalInventory={this.props.totalInventory}
							totalItems={this.props.totalItems}
						/>
					</div>
					<div>
						<InventoryContainer />
					</div>
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
