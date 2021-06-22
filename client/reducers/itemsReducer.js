import * as types from '../constants/actionTypes';

const initialState = {
	totalInventory: 0,
	totalItems: 0,
	inventoryList: [],
	lastItemId: 1,
	newItem: '',
};

const itemsReducer = (state = initialState, action) => {
	let inventoryList;
	let lastItemId;
	let totalInventory;
	let totalItems;

	switch (action.type) {
		case types.ADD_ITEM: {
			lastItemId = state.lastItemId;
			totalInventory = state.totalInventory;

			lastItemId++;
			totalInventory++;

			const newItem = {
				itemId: state.lastItemId,
				item: state.newItem,
				items: 0,
				percentageOfTotal: 0,
			};

			inventoryList = JSON.parse(JSON.stringify(state.inventoryList));
			inventoryList.push(newItem);

			// return updated state
			return {
				...state,
				inventoryList,
				lastItemId,
				totalInventory,
				newItem: '',
			};
		}
		case types.ADD_NEW_ITEM: {
			const updatedState = { ...state, newItem: action.payload };
			return updatedState;
		}

		case types.INCREMENT_COUNT: {
			totalItems = state.totalItems;
			inventoryList = JSON.parse(JSON.stringify(state.inventoryList));

			const itemCards = ++inventoryList[action.payload].items;
			totalItems++;
			for (let i = 0; i < inventoryList.length; i++) {
				inventoryList[i].percentageOfTotal = Math.floor(
					(inventoryList[i].items * 100) / totalItems
				);
			}

			return {
				...state,
				inventoryList,
				totalItems,
			};
		}

		case types.DECREMENT_COUNT: {
			totalItems = state.totalItems;
			inventoryList = JSON.parse(JSON.stringify(state.inventoryList));
			if (inventoryList[action.payload].items !== 0) {
				const itemCards = --inventoryList[action.payload].items;
				totalItems--;
				for (let i = 0; i < inventoryList.length; i++) {
					if (totalItems === 0) inventoryList[i].percentageOfTotal = 0;
					else
						inventoryList[i].percentageOfTotal = Math.floor(
							(inventoryList[i].items * 100) / totalItems
						);
				}

				return {
					...state,
					inventoryList,
					totalItems,
				};
			}
		}

		default: {
			return state;
		}
	}
};

export default itemsReducer;
