import * as types from '../constants/actionTypes';

export const incrementCount = (itemId) => ({
	type: types.INCREMENT_COUNT,
	payload: itemId,
});

export const addNewItem = (newItem) => {
	return { type: types.ADD_NEW_ITEM, payload: newItem };
};

export const addItem = () => {
	return { type: types.ADD_ITEM };
};
