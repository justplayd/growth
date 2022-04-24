import items from '../items.json';
import config from '../config.json';

const SET_NEXT_STATE = 'GAME/SET_NEXT_STATE';
const ANSWER_FALSE = 'GAME/ANSWER_FALSE';
const RESET_STATE = 'GAME/RESET_STATE';

const filteItems = Object.keys(items).filter(Boolean);
const firstElement = filteItems && filteItems.length && filteItems[(config?.countInit || 0)];

const initialState = {
	items,
	keyItemInit: firstElement,
	count: config.countInit,
	value: { ...items[firstElement] },
	keyItem: firstElement
};

// eslint-disable-next-line default-param-last
const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_NEXT_STATE:
			return {
				...state,
				count: action.payload,
				value: {
					...items[filteItems[action.payload]]
				},
				keyItem: (filteItems[action.payload] ?? filteItems[action.payload - 1])
			};
		case ANSWER_FALSE:
			return {
				...initialState
			};
		case RESET_STATE:
			return {
				...initialState
			};
		default:
			return state;
	}
};

export default rootReducer;
